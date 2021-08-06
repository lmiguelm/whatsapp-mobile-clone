import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import MenuMaterial from 'react-native-material-menu';

import { useSelector } from 'react-redux';
import { StoreType } from '../../reducers';

import { MenuCalls } from './MenuCalls';
import { MenuChat } from './MenuChats';
import { MenuStatus } from './MenuStatus';

import { Container, Title, ButtonsContainer, Icon, Menu } from './styles';

export function TabsHeader() {
  const currentPage = useSelector((store: StoreType) => store.Screen.currentScreen);

  const menuRef = useRef<MenuMaterial>(null);

  function showMenu() {
    menuRef.current?.show();
  }

  return (
    <Container>
      <Title>WhatsApp</Title>

      <ButtonsContainer>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="search" style={{ marginRight: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={showMenu}>
          <Menu ref={menuRef} button={<Icon name="more-vert" />}>
            {currentPage === 'Chats' && <MenuChat />}
            {currentPage === 'Status' && <MenuStatus />}
            {currentPage === 'Calls' && <MenuCalls />}
          </Menu>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
}
