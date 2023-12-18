import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red', // Change this to the desired color
        tabBarInactiveTintColor: 'gray', // Change this to the desired color
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: 'Explorer' }} />
    </Tabs>
  );
};

export default _layout;
