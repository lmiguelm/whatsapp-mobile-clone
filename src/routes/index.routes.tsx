import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Tabs } from './tab.routes';
import { useTheme } from 'styled-components';

import { Header } from '../components/Header';

const { Screen, Navigator } = createStackNavigator();

export function Routes() {
  const {
    colors: { backgroundSecondary, textMuted },
  } = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: backgroundSecondary,
            elevation: 0,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: backgroundSecondary,
          },
          headerTintColor: textMuted,
        }}
      >
        <Screen
          name="WhatsApp"
          component={Tabs}
          options={{
            headerTitle: () => <Header />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
