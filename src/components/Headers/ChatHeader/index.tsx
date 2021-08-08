import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { MenuItem } from 'react-native-material-menu';
import MenuMaterial from 'react-native-material-menu';

import {
  Container,
  Icon,
  LeftContainer,
  Name,
  Picture,
  RightContainer,
  Menu,
  MenuItemText,
} from './styles';

export function ChatHeader() {
  const menuRef = useRef<MenuMaterial>(null);

  const { goBack } = useNavigation();

  function showMenu() {
    menuRef.current?.show();
  }

  function handleBack() {
    goBack();
  }

  return (
    <Container>
      <LeftContainer>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Picture source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Name>Miguel</Name>
        </TouchableOpacity>
      </LeftContainer>

      <RightContainer>
        <TouchableOpacity>
          <Icon name="videocam" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="call" />
        </TouchableOpacity>

        <TouchableOpacity onPress={showMenu}>
          <Menu ref={menuRef} button={<Icon name="more-vert" />}>
            <MenuItem>
              <MenuItemText>View contact</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText>Media, links, and docs</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText>Search</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText>Mute notifications</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText>Wallpaper</MenuItemText>
            </MenuItem>
          </Menu>
        </TouchableOpacity>
      </RightContainer>
    </Container>
  );
}
