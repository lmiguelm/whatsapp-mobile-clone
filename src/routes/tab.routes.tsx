import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from '../screens/Home';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function Tabs() {
  const {
    colors: { backgroundSecondary, primary, textMuted },
    fonts: { bold },
  } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: textMuted,
        tabBarIndicatorContainerStyle: {
          backgroundColor: backgroundSecondary,
          borderWidth: 0,
          borderColor: backgroundSecondary,
        },
        tabBarIndicatorStyle: {
          borderColor: '#00AF9C',
          borderWidth: 2,
        },
        tabBarLabelStyle: {
          fontFamily: bold,
          textTransform: 'uppercase',
        },
      }}
    >
      <Screen name="Chats" component={Home} />
      <Screen name="Status" component={Home} />
      <Screen name="Calls" component={Home} />
    </Navigator>
  );
}
