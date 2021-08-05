import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from 'styled-components';

import { Status } from '../screens/Status';
import { Call } from '../screens/Call';
import { ChatList } from '../screens/ChatList';

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
      <Screen name="Chats" component={ChatList} />
      <Screen name="Status" component={Status} />
      <Screen name="Calls" component={Call} />
    </Navigator>
  );
}
