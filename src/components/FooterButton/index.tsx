import React from 'react';
import { Alert } from 'react-native';

import { FirstButton, SecondButton, Icon, Container } from './styles';

export function FooterButton() {
  return (
    <Container>
      <SecondButton onPress={() => Alert.alert('')}>
        <Icon name="message" />
      </SecondButton>

      <FirstButton onPress={() => Alert.alert('')}>
        <Icon name="message" />
      </FirstButton>
    </Container>
  );
}
