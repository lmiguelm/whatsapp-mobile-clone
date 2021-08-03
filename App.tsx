import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { DarkTheme } from './src/styles/theme/dark';

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
