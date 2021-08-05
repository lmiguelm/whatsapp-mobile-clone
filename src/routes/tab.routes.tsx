import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from 'styled-components';

import { Status } from '../screens/Status';
import { CallList } from '../screens/CallList';
import { ChatList } from '../screens/ChatList';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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
        tabBarStyle: {
          // paddingTop: getStatusBarHeight(),
          justifyContent: 'center',
        },
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
      <Screen name="Calls" component={CallList} />
    </Navigator>
  );
}
