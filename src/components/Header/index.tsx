import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Title, ButtonsContainer, Icon } from './styles';

export function Header() {
  return (
    <Container>
      <Title>WhatsApp</Title>

      <ButtonsContainer>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="search" style={{ marginRight: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="more-vert" />
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
}
