import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Avatar } from '../Avatar/indes';

import {
  ContactContainer,
  Icon,
  ContentContaienr,
  Hour,
  InfoContainer,
  Message,
  Name,
  MessageInfoContainer,
} from './styles';

type ContactTypeProps = {
  isChatMessage: boolean;
};

export function Contact({ isChatMessage = false }: ContactTypeProps) {
  return (
    <ContactContainer>
      <Avatar />
      <ContentContaienr>
        <TouchableWithoutFeedback>
          <Name>Miguel</Name>

          <MessageInfoContainer>
            {isChatMessage && <Icon name="done-all" />}
            <Message>Olá, Mundo!</Message>
          </MessageInfoContainer>
        </TouchableWithoutFeedback>
      </ContentContaienr>

      {isChatMessage && (
        <InfoContainer>
          <TouchableWithoutFeedback>
            <Hour>20:58</Hour>
            <Icon name="volume-off" />
          </TouchableWithoutFeedback>
        </InfoContainer>
      )}
    </ContactContainer>
  );
}
