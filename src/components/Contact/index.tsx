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
  StatusCallIcon,
  CallIcon,
  StatusMesasgeIcon,
} from './styles';

type ContactTypeProps = {
  type: 'message' | 'info' | 'call';
};

export function Contact({ type }: ContactTypeProps) {
  return (
    <ContactContainer>
      <Avatar />
      <ContentContaienr>
        <TouchableWithoutFeedback>
          <Name>Miguel</Name>

          <MessageInfoContainer>
            {type === 'message' && (
              <>
                <StatusMesasgeIcon status="seen" />
                <Message numberOfLines={1}>Teste Teste Teste Teste Testeeeeeeee</Message>
              </>
            )}
            {type === 'call' && (
              <>
                <StatusCallIcon status="accepted" />
                <Message numberOfLines={1}>July 26, 17:41</Message>
              </>
            )}
            {type === 'info' && <Message numberOfLines={1}>Olá, estou usando o whatsapp</Message>}
          </MessageInfoContainer>
        </TouchableWithoutFeedback>
      </ContentContaienr>

      <InfoContainer>
        <TouchableWithoutFeedback>
          {type === 'message' && (
            <>
              <Hour>20:58</Hour>
              <Icon name="volume-off" />
            </>
          )}
          {type === 'call' && <CallIcon type="videocall" />}
        </TouchableWithoutFeedback>
      </InfoContainer>
    </ContactContainer>
  );
}
