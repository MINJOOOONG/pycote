import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';
import { BorderRadius, Spacing } from '../constants/layout';

interface PillProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

/** Compact tag/label chip — used for categories, tags, meta. */
export function Pill({ label, color = Colors.textTertiary, backgroundColor = Colors.surfaceElevated, style }: PillProps) {
  return (
    <View style={[styles.pill, { backgroundColor }, style]}>
      <Text style={[styles.text, { color }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
  },
});
