import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BookmarkState {
  bookmarkedIds: string[];
  toggleBookmark: (problemId: string) => void;
  isBookmarked: (problemId: string) => boolean;
  clearBookmarks: () => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkedIds: [],
      toggleBookmark: (problemId) => {
        const { bookmarkedIds } = get();
        set({
          bookmarkedIds: bookmarkedIds.includes(problemId)
            ? bookmarkedIds.filter((id) => id !== problemId)
            : [...bookmarkedIds, problemId],
        });
      },
      isBookmarked: (problemId) => get().bookmarkedIds.includes(problemId),
      clearBookmarks: () => set({ bookmarkedIds: [] }),
    }),
    {
      name: '@pycote/bookmarks',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
