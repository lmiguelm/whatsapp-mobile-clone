import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import { Tabs } from './tab.routes';
import { navigationRef } from '../utils/RootNavigation';

import { changeCurrentScreen } from '../actions/screenAction';

import { ContactHeader } from '../components/ContactHeader';
import { TabsHeader } from '../components/TabsHeader';
import { ChatHeader } from '../components/ChatHeader';

import { Contacts } from '../screens/Contacts';
import { StoreType } from '../reducers';
import { Chat } from '../screens/Chat';

const { Screen, Navigator } = createStackNavigator();

export function Routes() {
  const dispatch = useDispatch();
  const showModalStatus = useSelector((store: StoreType) => store.Status.showModalStatus);

  const {
    title,
    colors: { backgroundSecondary, textMuted },
  } = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: title === 'dark' ? backgroundSecondary : '#075E54',
            elevation: 0,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: backgroundSecondary,
          },
          headerTintColor: title === 'dark' ? textMuted : '#fff',
        }}
      >
        <Screen
          name="WhatsApp"
          component={Tabs}
          options={{
            headerShown: !showModalStatus,
            headerTitle: () => <TabsHeader />,
          }}
        />

        <Screen
          name="Contacts"
          component={Contacts}
          options={{
            header: () => <ContactHeader />,
          }}
          listeners={() => ({
            focus: () => dispatch(changeCurrentScreen(null)),
          })}
        />

        <Screen
          name="Chat"
          component={Chat}
          options={{
            header: () => <ChatHeader />,
          }}
          listeners={() => ({
            focus: () => dispatch(changeCurrentScreen(null)),
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
