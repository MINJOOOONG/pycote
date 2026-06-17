import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 24,
  xxxl: 28,
} as const;

export const FontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const Typography = StyleSheet.create({
  h1: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  h4: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  body1: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.regular,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  body2: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    color: Colors.textTertiary,
    lineHeight: 16,
  },
  code: {
    fontSize: FontSize.sm,
    fontFamily: 'monospace' as any,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
});
