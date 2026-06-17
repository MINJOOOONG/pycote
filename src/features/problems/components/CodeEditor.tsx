import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../../constants/colors';
import { FontSize, MonoFont } from '../../../constants/typography';
import { Spacing, BorderRadius } from '../../../constants/layout';

interface Props {
  value: string;
  onChange: (code: string) => void;
  disabled?: boolean;
  onReset?: () => void;
}

export function CodeEditor({ value, onChange, disabled = false, onReset }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.toolbar}>
        <View style={styles.dots}>
          <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
          <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
          <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
        </View>
        <Text style={styles.langLabel}>Python 3</Text>
        {onReset && (
          <TouchableOpacity onPress={onReset} style={styles.resetBtn} activeOpacity={0.7}>
            <Text style={styles.resetText}>초기화</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        value={value}
        onChangeText={onChange}
        multiline
        editable={!disabled}
        style={[styles.input, disabled && styles.inputDisabled]}
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        textAlignVertical="top"
        placeholder="# 여기에 Python 코드를 작성하세요"
        placeholderTextColor={Colors.textTertiary}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.codeBorder,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceElevated,
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.codeBorder,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  langLabel: {
    marginLeft: Spacing.md,
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    fontFamily: MonoFont,
    flex: 1,
  },
  resetBtn: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.codeBorder,
  },
  resetText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  input: {
    backgroundColor: Colors.codeBackground,
    color: Colors.codeText,
    fontFamily: MonoFont,
    fontSize: 14,
    lineHeight: 22,
    padding: Spacing.md,
    minHeight: 220,
  },
  inputDisabled: {
    opacity: 0.6,
  },
});
