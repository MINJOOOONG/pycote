import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConceptListScreen } from '../features/concepts/screens/ConceptListScreen';
import { ConceptDetailScreen } from '../features/concepts/screens/ConceptDetailScreen';
import { ConceptsStackParamList } from './types';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/typography';

const Stack = createNativeStackNavigator<ConceptsStackParamList>();

export function ConceptsStackNavigator() {
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
        name="ConceptList"
        component={ConceptListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConceptDetail"
        component={ConceptDetailScreen}
        options={{ title: '개념', headerBackTitle: '' }}
      />
    </Stack.Navigator>
  );
}
