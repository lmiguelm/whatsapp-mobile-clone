import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, Title, ButtonsContainer, Icon } from './styles';

export function Header() {
  return (
    <Container>
      <Title>WhatsApp</Title>

      <ButtonsContainer>
        <BorderlessButton onPress={() => {}}>
          <Icon name="search" style={{ marginRight: 10 }} />
        </BorderlessButton>

        <BorderlessButton onPress={() => {}}>
          <Icon name="more-vert" />
        </BorderlessButton>
      </ButtonsContainer>
    </Container>
  );
}
