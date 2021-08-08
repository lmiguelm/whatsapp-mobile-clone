import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import { Tabs } from './tab.routes';
import { navigationRef } from '../utils/RootNavigation';

import { changeCurrentScreen } from '../actions/screenAction';

import { ContactHeader } from '../components/Headers/ContactHeader';
import { TabsHeader } from '../components/Headers/TabsHeader';
import { ChatHeader } from '../components/Headers/ChatHeader';
import { CallInfoHeader } from '../components/Headers/CallInfoHeader';

import { Contacts } from '../screens/Contacts';
import { StoreType } from '../reducers';
import { Chat } from '../screens/Chat';
import { ScreenType } from '../reducers/screen';
import { CallInfo } from '../screens/CallInfo';
import { Camera } from '../screens/Camera';

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
        screenListeners={() => ({
          focus: () => dispatch(changeCurrentScreen(null)),
        })}
      >
        <Screen
          name="WhatsApp"
          component={Tabs}
          options={{
            headerShown: !showModalStatus,
            headerTitle: () => <TabsHeader />,
          }}
          listeners={({ route }) => ({
            focus: () => dispatch(changeCurrentScreen(route.name as ScreenType)),
          })}
        />

        <Screen
          name="Contacts"
          component={Contacts}
          options={{
            header: () => <ContactHeader />,
          }}
        />

        <Screen
          name="Chat"
          component={Chat}
          options={{
            header: () => <ChatHeader />,
          }}
        />

        <Screen
          name="CallInfo"
          component={CallInfo}
          options={{
            header: () => <CallInfoHeader />,
          }}
        />

        <Screen name="Camera" component={Camera} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
