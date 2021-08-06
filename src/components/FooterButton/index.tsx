import React from 'react';
import { Alert } from 'react-native';

import { useSelector } from 'react-redux';
import { StoreType } from '../../reducers';
import { RootNavigate } from '../../utils/RootNavigation';

import { FirstButton, SecondButton, Icon, Container } from './styles';

export function FooterButton() {
  const currentScreen = useSelector((store: StoreType) => store.Screen.currentScreen);

  function navigateToContactsScreen() {
    RootNavigate('Contacts');
  }

  if (!currentScreen) {
    return <></>;
  }

  return (
    <Container>
      {currentScreen !== 'Chats' && (
        <SecondButton onPress={() => Alert.alert('')}>
          <Icon name={currentScreen === 'Status' ? 'edit' : 'video-call'} />
        </SecondButton>
      )}

      {currentScreen === 'Chats' && (
        <FirstButton>
          <Icon name="message" onPress={navigateToContactsScreen} />
        </FirstButton>
      )}

      {currentScreen === 'Status' && (
        <FirstButton>
          <Icon name="camera-alt" onPress={() => Alert.alert('')} />
        </FirstButton>
      )}

      {currentScreen === 'Calls' && (
        <FirstButton>
          <Icon name="add-ic-call" onPress={() => Alert.alert('')} />
        </FirstButton>
      )}
    </Container>
  );
}
