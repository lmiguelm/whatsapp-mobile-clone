import React from 'react';
import { Avatar } from '../../components/Avatar/indes';
import { CallLog } from '../../components/CallLog';

import {
  Container,
  Content,
  Description,
  Header,
  Icon,
  InfoContainer,
  LeftContainer,
  Name,
  RightContainer,
} from './styles';

export function CallInfo() {
  return (
    <Container>
      <Header>
        <LeftContainer>
          <Avatar />

          <InfoContainer>
            <Name numberOfLines={1}>Miguel</Name>
            <Description numberOfLines={1}>Hey threre! I am using whatsapp</Description>
          </InfoContainer>
        </LeftContainer>

        <RightContainer>
          <Icon name="call" />
          <Icon name="videocam" />
        </RightContainer>
      </Header>

      <Content>
        <CallLog />
        <CallLog />
      </Content>
    </Container>
  );
}
