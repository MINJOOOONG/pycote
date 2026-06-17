import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProblemsStackNavigator } from './ProblemsStackNavigator';
import { ConceptsStackNavigator } from './ConceptsStackNavigator';
import { TabParamList } from './types';
import { Colors } from '../constants/colors';
import { FontSize } from '../constants/typography';

const Tab = createBottomTabNavigator<TabParamList>();

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.tabBarBackground,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: Colors.tabBarActive,
        tabBarInactiveTintColor: Colors.tabBarInactive,
        tabBarLabelStyle: {
          fontSize: FontSize.xs,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="ProblemsTab"
        component={ProblemsStackNavigator}
        options={{
          tabBarLabel: '문제풀이',
          tabBarIcon: ({ focused }) => <TabIcon emoji="💻" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ConceptsTab"
        component={ConceptsStackNavigator}
        options={{
          tabBarLabel: '개념요약',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📚" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
