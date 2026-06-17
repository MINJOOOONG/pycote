import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProblemListScreen } from '../features/problems/screens/ProblemListScreen';
import { ProblemDetailScreen } from '../features/problems/screens/ProblemDetailScreen';
import { ProblemsStackParamList } from './types';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';

const Stack = createNativeStackNavigator<ProblemsStackParamList>();

export function ProblemsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.textPrimary,
        headerTitleStyle: { fontSize: FontSize.lg, fontWeight: FontWeight.semibold },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen
        name="ProblemList"
        component={ProblemListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProblemDetail"
        component={ProblemDetailScreen}
        options={{ title: '문제', headerBackTitle: '' }}
      />
    </Stack.Navigator>
  );
}
