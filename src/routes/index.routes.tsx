import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import { TabsHeader } from '../components/TabsHeader';

import { Tabs } from './tab.routes';
import { MyContacts } from '../screens/MyContacts';
import { navigationRef } from '../utils/RootNavigation';
import { useDispatch } from 'react-redux';
import { changeCurrentScreen } from '../actions/screenAction';
import { ContactHeader } from '../components/ContactHeader';

const { Screen, Navigator } = createStackNavigator();

export function Routes() {
  const dispatch = useDispatch();

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
            headerTitle: () => <TabsHeader />,
          }}
        />

        <Screen
          name="Contacts"
          component={MyContacts}
          options={{
            header: () => <ContactHeader />,
          }}
          listeners={() => ({
            focus: () => dispatch(changeCurrentScreen(null)),
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
