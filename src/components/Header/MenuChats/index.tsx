import React from 'react';

import { MenuItem } from 'react-native-material-menu';
import { MenuItemText } from '../styles';

export function MenuChat() {
  return (
    <>
      <MenuItem onPress={() => {}}>
        <MenuItemText>New group</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>New broadcast</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Linked devices</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Starred messages</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Payments</MenuItemText>
      </MenuItem>

      <MenuItem onPress={() => {}}>
        <MenuItemText>Settings</MenuItemText>
      </MenuItem>
    </>
  );
}
