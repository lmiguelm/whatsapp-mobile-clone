import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { MenuItem } from 'react-native-material-menu';
import MenuMaterial from 'react-native-material-menu';

import {
  Container,
  Icon,
  LeftContainer,
  Title,
  RightContainer,
  Menu,
  MenuItemText,
} from './styles';

export function CallInfoHeader() {
  const menuRef = useRef<MenuMaterial>(null);

  const { goBack, navigate } = useNavigation<any>();

  function showMenu() {
    menuRef.current?.show();
  }

  function handleBack() {
    goBack();
  }

  function handleToChatSreen() {
    navigate({ name: 'Chat' });
  }

  return (
    <Container>
      <LeftContainer>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Title>Call info</Title>
        </TouchableOpacity>
      </LeftContainer>

      <RightContainer>
        <TouchableOpacity style={{ marginRight: 20 }} onPress={handleToChatSreen}>
          <Icon name="chat" />
        </TouchableOpacity>

        <TouchableOpacity onPress={showMenu}>
          <Menu ref={menuRef} button={<Icon name="more-vert" />}>
            <MenuItem>
              <MenuItemText>Remove from call log</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemText>Block</MenuItemText>
            </MenuItem>
          </Menu>
        </TouchableOpacity>
      </RightContainer>
    </Container>
  );
}
