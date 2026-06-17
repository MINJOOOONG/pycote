import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius, Spacing, Shadow } from '../constants/layout';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  padded?: boolean;
  elevated?: boolean;
}

/**
 * Base surface card — white, soft border, optional soft shadow.
 * The visual unit of the entire app (Notion / Linear style).
 */
export function Card({ children, onPress, style, padded = true, elevated = true }: CardProps) {
  const content = (
    <View
      style={[
        styles.card,
        padded && styles.padded,
        elevated && (Shadow.card as ViewStyle),
        style,
      ]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
        {content}
      </TouchableOpacity>
    );
  }
  return content;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  padded: {
    padding: Spacing.lg,
  },
});
