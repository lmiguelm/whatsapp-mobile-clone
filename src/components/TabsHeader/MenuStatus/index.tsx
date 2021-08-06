import React from 'react';

import { MenuItem } from 'react-native-material-menu';
import { MenuItemText } from '../styles';

export function MenuStatus() {
  return (
    <>
      <MenuItem onPress={() => {}}>
        <MenuItemText>Status privacy</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Settings</MenuItemText>
      </MenuItem>
    </>
  );
}
