import React from 'react';
import { Alert } from 'react-native';

import { useSelector } from 'react-redux';
import { StoreType } from '../../reducers';

import { FirstButton, SecondButton, Icon, Container } from './styles';

export function FooterButton() {
  const currentScreen = useSelector((store: StoreType) => store.Screen.currentScreen);

  return (
    <Container>
      {currentScreen !== 'Chats' && (
        <SecondButton onPress={() => Alert.alert('')}>
          <Icon name={currentScreen === 'Status' ? 'edit' : 'video-call'} />
        </SecondButton>
      )}

      <FirstButton onPress={() => Alert.alert('')}>
        <Icon
          name={
            currentScreen === 'Chats'
              ? 'message'
              : currentScreen === 'Status'
              ? 'camera-alt'
              : 'add-ic-call'
          }
        />
      </FirstButton>
    </Container>
  );
}
