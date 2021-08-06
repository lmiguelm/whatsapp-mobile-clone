import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from 'styled-components';

import { Status } from '../screens/Status';
import { CallList } from '../screens/CallList';
import { ChatList } from '../screens/ChatList';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useDispatch } from 'react-redux';
import { changeCurrentScreen } from '../actions/screenAction';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function Tabs() {
  const dispatch = useDispatch();

  const {
    title,
    colors: { backgroundSecondary, primary, textMuted },
    fonts: { bold },
  } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: title === 'dark' ? textMuted : '#fff',
        tabBarInactiveTintColor: title === 'dark' ? textMuted : '#ddd',
        tabBarStyle: {
          justifyContent: 'center',
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: title === 'dark' ? backgroundSecondary : '#075E54',
          borderWidth: 0,
          borderColor: backgroundSecondary,
        },
        tabBarIndicatorStyle: {
          borderColor: title === 'dark' ? '#075E54' : '#fff',
          borderWidth: 2,
        },
        tabBarLabelStyle: {
          fontFamily: bold,
          textTransform: 'uppercase',
        },
      }}
      screenListeners={({ route }) => ({
        focus: () => dispatch(changeCurrentScreen(route.name as any)),
      })}
    >
      <Screen name="Chats" component={ChatList} />
      <Screen name="Status" component={Status} />
      <Screen name="Calls" component={CallList} />
    </Navigator>
  );
}
