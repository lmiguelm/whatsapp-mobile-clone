import React from 'react';

import { MenuItem } from 'react-native-material-menu';
import { MenuItemText } from '../styles';

export function MenuCalls() {
  return (
    <>
      <MenuItem onPress={() => {}}>
        <MenuItemText>Clear call log</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Settings</MenuItemText>
      </MenuItem>
    </>
  );
}
