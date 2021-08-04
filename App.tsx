import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_300Light,
  Roboto_400Regular_Italic,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';
import { DarkTheme } from './src/styles/theme/dark';
import { LightTheme } from './src/styles/theme/light';

import { Routes } from './src/routes/index.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_300Light,
    Roboto_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <StatusBar style="light" />
      <Routes />
    </ThemeProvider>
  );
}
