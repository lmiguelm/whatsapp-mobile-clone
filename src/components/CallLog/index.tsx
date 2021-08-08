import React from 'react';

import {
  Container,
  Icon,
  InfoContainer,
  LeftContainer,
  RightContainer,
  Date,
  Title,
  Description,
} from './styles';

export function CallLog() {
  return (
    <Container>
      <LeftContainer>
        <Icon name="call-made" />

        <InfoContainer>
          <Title>Outgoing</Title>
          <Date>10:27</Date>
        </InfoContainer>
      </LeftContainer>

      <RightContainer>
        <Date>1:53</Date>
        <Description>679 KB</Description>
      </RightContainer>
    </Container>
  );
}
