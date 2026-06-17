/**
 * Pycote Design System — Color Tokens
 *
 * Light, premium, developer-tool aesthetic (Linear / Raycast / Apple HIG).
 * Key names are stable so components reference semantic roles, never raw hex.
 */
export const Colors = {
  // Backgrounds
  background: '#FAFAFA',
  backgroundAlt: '#F5F5F7',

  // Surfaces (cards / elevated)
  surface: '#FFFFFF',
  surfaceElevated: '#F5F5F7',
  surfaceHighlight: '#EEF0F4',
  surfaceSunken: '#F3F4F6',

  // Text
  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#6B7280',
  textQuaternary: '#9CA3AF',
  textInverse: '#FFFFFF',

  // Brand
  primary: '#2563EB',
  primaryHover: '#1D4ED8',
  primaryLight: '#3B82F6',
  primaryDim: 'rgba(37, 99, 235, 0.08)',
  primarySoft: 'rgba(37, 99, 235, 0.12)',

  // Borders / dividers
  border: '#E5E7EB',
  borderLight: '#F0F1F3',
  borderStrong: '#D1D5DB',

  // Semantic
  success: '#22C55E',
  successDim: 'rgba(34, 197, 94, 0.10)',
  successBorder: 'rgba(34, 197, 94, 0.28)',
  warning: '#F59E0B',
  warningDim: 'rgba(245, 158, 11, 0.10)',
  error: '#EF4444',
  errorDim: 'rgba(239, 68, 68, 0.10)',
  errorBorder: 'rgba(239, 68, 68, 0.28)',

  // Difficulty levels (calibrated for light backgrounds)
  level0: '#64748B',
  level1: '#16A34A',
  level2: '#2563EB',
  level3: '#D97706',
  level4: '#EA580C',
  level5: '#DC2626',

  // Code surface (subtle, GitHub-light inspired — minimal, not a dark slab)
  codeBackground: '#F6F8FA',
  codeBorder: '#E7EBF0',
  codeText: '#1F2937',
  codeMuted: '#9CA3AF',
  codeAccent: '#2563EB',

  // Tab bar (glass feel handled by surface + soft border)
  tabBarBackground: '#FFFFFF',
  tabBarActive: '#2563EB',
  tabBarInactive: '#9CA3AF',

  // Overlay
  overlay: 'rgba(17, 24, 39, 0.40)',
} as const;
