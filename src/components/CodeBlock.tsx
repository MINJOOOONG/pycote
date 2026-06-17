import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { FontSize } from '../constants/typography';
import { Spacing, BorderRadius } from '../constants/layout';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  const lines = code.split('\n');

  return (
    <View style={styles.wrapper}>
      {language && language !== 'input' && language !== 'output' && (
        <View style={styles.header}>
          <Text style={styles.language}>{language}</Text>
        </View>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.codeContainer}>
          {showLineNumbers && lines.length > 1 ? (
            lines.map((line, i) => (
              <View key={i} style={styles.lineRow}>
                <Text style={styles.lineNumber}>{i + 1}</Text>
                <Text style={styles.codeLine}>{line}</Text>
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
    borderColor: Colors.border,
  },
  header: {
    backgroundColor: Colors.surfaceHighlight,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  language: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    fontFamily: 'monospace' as any,
  },
  scrollView: {
    backgroundColor: '#0D1117',
  },
  codeContainer: {
    padding: Spacing.md,
  },
  lineRow: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  lineNumber: {
    width: 28,
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    fontFamily: 'monospace' as any,
    textAlign: 'right',
    marginRight: Spacing.md,
    lineHeight: 20,
    userSelect: 'none' as any,
  },
  codeLine: {
    fontSize: FontSize.sm,
    color: '#E6EDF3',
    fontFamily: 'monospace' as any,
    lineHeight: 20,
  },
  codePlain: {
    fontSize: FontSize.sm,
    color: '#E6EDF3',
    fontFamily: 'monospace' as any,
    lineHeight: 20,
  },
});
