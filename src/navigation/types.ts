import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: undefined;
};

export type TabParamList = {
  ProblemsTab: undefined;
  ConceptsTab: undefined;
};

export type ProblemsStackParamList = {
  ProblemList: undefined;
  ProblemDetail: { problemId: string };
};

export type ConceptsStackParamList = {
  ConceptList: undefined;
  ConceptDetail: { conceptId: string };
};

export type ProblemListNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProblemsStackParamList, 'ProblemList'>,
  BottomTabNavigationProp<TabParamList>
>;

export type ProblemDetailNavigationProp = NativeStackNavigationProp<
  ProblemsStackParamList,
  'ProblemDetail'
>;

export type ProblemDetailRouteProp = RouteProp<
  ProblemsStackParamList,
  'ProblemDetail'
>;

export type ConceptListNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ConceptsStackParamList, 'ConceptList'>,
  BottomTabNavigationProp<TabParamList>
>;

export type ConceptDetailNavigationProp = NativeStackNavigationProp<
  ConceptsStackParamList,
  'ConceptDetail'
>;

export type ConceptDetailRouteProp = RouteProp<
  ConceptsStackParamList,
  'ConceptDetail'
>;
