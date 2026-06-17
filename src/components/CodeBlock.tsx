import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight, MonoFont } from '../constants/typography';
import { Spacing, BorderRadius } from '../constants/layout';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

/**
 * Minimal light code surface (GitHub-light inspired).
 * `input` / `output` languages render a compact, header-less variant.
 */
export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  const lines = code.split('\n');
  const isIO = language === 'input' || language === 'output';
  const useLineNumbers = showLineNumbers && lines.length > 1 && !isIO;

  return (
    <View style={styles.wrapper}>
      {language && !isIO && (
        <View style={styles.header}>
          <View style={styles.dots}>
            <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
            <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
            <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
          </View>
          <Text style={styles.language}>{language}</Text>
        </View>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={[styles.codeContainer, isIO && styles.codeContainerIO]}>
          {useLineNumbers ? (
            lines.map((line, i) => (
              <View key={i} style={styles.lineRow}>
                <Text style={styles.lineNumber}>{i + 1}</Text>
                <Text style={styles.codeLine}>{line || ' '}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.codePlain}>{code}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.codeBorder,
    backgroundColor: Colors.codeBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.surfaceElevated,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.codeBorder,
  },
  dots: {
    flexDirection: 'row',
    gap: 5,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
  language: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    fontFamily: MonoFont,
    fontWeight: FontWeight.medium,
  },
  scrollView: {
    backgroundColor: Colors.codeBackground,
  },
  codeContainer: {
    padding: Spacing.md,
  },
  codeContainerIO: {
    paddingVertical: Spacing.sm + 2,
  },
  lineRow: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  lineNumber: {
    width: 26,
    fontSize: FontSize.sm,
    color: Colors.codeMuted,
    fontFamily: MonoFont,
    textAlign: 'right',
    marginRight: Spacing.md,
    lineHeight: 21,
    userSelect: 'none' as any,
  },
  codeLine: {
    fontSize: FontSize.sm,
    color: Colors.codeText,
    fontFamily: MonoFont,
    lineHeight: 21,
  },
  codePlain: {
    fontSize: FontSize.sm,
    color: Colors.codeText,
    fontFamily: MonoFont,
    lineHeight: 21,
  },
});
