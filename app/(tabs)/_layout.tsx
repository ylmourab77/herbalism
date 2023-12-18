import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary, // Change this to the desired color
        tabBarInactiveTintColor: 'gray', // Change this to the desired color
      }}
    >
      <Tabs.Screen name="index" options={{ 
        tabBarLabel: 'Explorer', 
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        }} />
        
        <Tabs.Screen name="favorites" options={{ 
        tabBarLabel: 'Favorites', 
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
        }} />
        <Tabs.Screen name="profile" options={{ 
        tabBarLabel: 'Profile', 
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" color={color} size={size} />
        ),
        }} />
        
    </Tabs>
  );
};

export default _layout;
