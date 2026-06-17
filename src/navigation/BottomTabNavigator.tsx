import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { HomeStackNavigator } from './HomeStackNavigator';
import { ProblemsStackNavigator } from './ProblemsStackNavigator';
import { ConceptsStackNavigator } from './ConceptsStackNavigator';
import { TabParamList } from './types';
import { Colors } from '../constants/colors';
import { FontWeight } from '../constants/typography';

const Tab = createBottomTabNavigator<TabParamList>();

type IconName = keyof typeof Feather.glyphMap;

function tabIcon(name: IconName) {
  return ({ color, size }: { color: string; size: number }) => (
    <Feather name={name} size={size - 1} color={color} />
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
          height: Platform.OS === 'ios' ? 84 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.tabBarActive,
        tabBarInactiveTintColor: Colors.tabBarInactive,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: FontWeight.semibold,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ tabBarLabel: '홈', tabBarIcon: tabIcon('home') }}
      />
      <Tab.Screen
        name="ProblemsTab"
        component={ProblemsStackNavigator}
        options={{ tabBarLabel: '문제풀이', tabBarIcon: tabIcon('code') }}
      />
      <Tab.Screen
        name="ConceptsTab"
        component={ConceptsStackNavigator}
        options={{ tabBarLabel: '개념요약', tabBarIcon: tabIcon('book-open') }}
      />
    </Tab.Navigator>
  );
}
