import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../constants/colors';
import { BorderRadius } from '../constants/layout';

interface ProgressBarProps {
  /** 0 – 1 */
  value: number;
  height?: number;
  color?: string;
  trackColor?: string;
  style?: StyleProp<ViewStyle>;
}

export function ProgressBar({
  value,
  height = 8,
  color = Colors.primary,
  trackColor = Colors.surfaceHighlight,
  style,
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(1, value));
  return (
    <View style={[styles.track, { height, backgroundColor: trackColor }, style]}>
      <View
        style={[
          styles.fill,
          { width: `${pct * 100}%`, backgroundColor: color, height },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: BorderRadius.full,
  },
});
