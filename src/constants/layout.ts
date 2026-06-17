/**
 * Pycote Design System — Spacing, Radius, Elevation
 *
 * 8px-based spacing scale (4px half-steps allowed for tight UI).
 * Soft, layered shadows for premium depth — never harsh.
 */
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
} as const;

/** Standard horizontal screen padding (generous, breathable). */
export const ScreenPadding = 20;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 999,
} as const;

/** Minimum interactive target per Apple HIG. */
export const TouchTarget = 44;

/**
 * Soft elevation tokens. Web uses boxShadow; native uses shadowColor/elevation.
 * Spread cross-platform fields with `...Shadow.card` on a style object.
 */
export const Shadow = {
  none: {},
  xs: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
  },
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
  },
  float: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
  },
  primary: {
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    shadowRadius: 12,
    elevation: 4,
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.24)',
  },
} as const;
