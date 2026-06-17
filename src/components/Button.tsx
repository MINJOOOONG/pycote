import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { BorderRadius, Spacing, TouchTarget, Shadow } from '../constants/layout';

type Variant = 'primary' | 'secondary' | 'ghost' | 'success';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  icon?: keyof typeof Feather.glyphMap;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}

const VARIANT_BG: Record<Variant, string> = {
  primary: Colors.primary,
  secondary: Colors.surface,
  ghost: 'transparent',
  success: Colors.success,
};

const VARIANT_FG: Record<Variant, string> = {
  primary: Colors.textInverse,
  secondary: Colors.textPrimary,
  ghost: Colors.textSecondary,
  success: Colors.textInverse,
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}: ButtonProps) {
  const fg = VARIANT_FG[variant];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.85}
      style={[
        styles.base,
        { backgroundColor: VARIANT_BG[variant] },
        variant === 'secondary' && styles.bordered,
        variant === 'primary' && (Shadow.primary as ViewStyle),
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={fg} />
      ) : (
        <View style={styles.content}>
          {icon && <Feather name={icon} size={17} color={fg} />}
          <Text style={[styles.label, { color: fg }]}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: TouchTarget,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bordered: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  fullWidth: {
    flex: 1,
  },
  disabled: {
    opacity: 0.45,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  label: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
  },
});
