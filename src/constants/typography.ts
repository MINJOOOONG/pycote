import { Platform, StyleSheet } from 'react-native';
import { Colors } from './colors';

/**
 * Pycote Design System — Typography
 *
 * One restrained scale. Apple-style: bold display titles, regular body.
 * System font stack keeps it native on iOS and clean on web.
 */
export const FontSize = {
  xs: 12,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 26,
  display: 32,
} as const;

export const FontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const LineHeight = {
  tight: 1.2,
  normal: 1.45,
  relaxed: 1.6,
} as const;

/** Monospace stack for code surfaces. */
export const MonoFont = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
}) as string;

export const Typography = StyleSheet.create({
  display: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.6,
    lineHeight: 38,
  },
  title: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.4,
    lineHeight: 32,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    letterSpacing: -0.2,
  },
  subheading: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.regular,
    color: Colors.textSecondary,
    lineHeight: 23,
  },
  bodyStrong: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  caption: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.textTertiary,
    lineHeight: 18,
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.textTertiary,
    letterSpacing: 0.2,
  },
  code: {
    fontSize: FontSize.sm,
    fontFamily: MonoFont,
    color: Colors.codeText,
    lineHeight: 21,
  },
});
