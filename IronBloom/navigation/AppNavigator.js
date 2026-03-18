// Sets up the navigation for the app- controls how the user moves between screens

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import WorkoutLibraryScreen from '../screens/WorkoutLibraryScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import GoalSettingScreen from '../screens/GoalSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Color Palette
const colors = {
    primary: '#2D4A3E',
    background: '#FAF8F4',
    tabBar: '#FFFFFF',
    inactive: '#B0B8B4',
    border: '#E8E2D9',
};

//WorkoutStack groups the library and detail screens together
function WorkoutStack() {
    return (
        //won't show the header 
           <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WorkoutLibrary" component={WorkoutLibraryScreen} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
    </Stack.Navigator>
    );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,

        // Styling the tab bar for a clean elevated look
        tabBarStyle: {
          backgroundColor: COLORS.tabBar,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 6,
          height: 65,
          // Shadow gives it that floating glass panel feel
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 10,
          elevation: 10,
        },

        // Emoji icons for each tab
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: '🏠',
            Workouts: '💪',
            Goals: '🎯',
            Profile: '👤',
          };
          return <Text style={{ fontSize: size - 4 }}>{icons[route.name]}</Text>;
        },

        // Tab label styling
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.3,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workouts" component={WorkoutStack} />
      <Tab.Screen name="Goals" component={GoalSettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}