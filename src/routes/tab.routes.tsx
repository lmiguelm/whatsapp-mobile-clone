import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from 'styled-components';

import { StatusList } from '../screens/StatusList';
import { CallList } from '../screens/CallList';
import { ChatList } from '../screens/ChatList';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentScreen } from '../actions/screenAction';
import { StoreType } from '../reducers';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function Tabs() {
  const dispatch = useDispatch();

  const showModalStatus = useSelector((store: StoreType) => store.Status.showModalStatus);

  const {
    title,
    colors: { backgroundSecondary, textMuted, primary },
    fonts: { bold },
  } = useTheme();

  if (showModalStatus) {
    return (
      <Navigator tabBar={() => <></>}>
        <Screen name="Chats" component={ChatList} />
        <Screen name="Status" component={StatusList} />
        <Screen name="Calls" component={CallList} />
      </Navigator>
    );
  } else {
    return (
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: title === 'dark' ? primary : '#fff',
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
            borderColor: title === 'dark' ? primary : '#fff',
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
        <Screen name="Status" component={StatusList} />
        <Screen name="Calls" component={CallList} />
      </Navigator>
    );
  }
}
