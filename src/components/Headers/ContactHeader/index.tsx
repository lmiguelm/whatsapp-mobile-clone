import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon, InfoContainer, Title, Subtitle, IconsContainer } from './styles';

export function ContactHeader() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrow-back" />
      </TouchableOpacity>

      <InfoContainer>
        <Title>Select contact</Title>
        <Subtitle>86 contacts</Subtitle>
      </InfoContainer>

      <IconsContainer>
        <TouchableOpacity>
          <Icon name="search" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 15 }}>
          <Icon name="more-vert" />
        </TouchableOpacity>
      </IconsContainer>
    </Container>
  );
}
