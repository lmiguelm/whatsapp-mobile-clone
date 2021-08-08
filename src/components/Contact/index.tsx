import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
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

type ContactTypeProps = TouchableOpacityProps & {
  type: 'message' | 'info' | 'call';
};

export function Contact({ type, ...props }: ContactTypeProps) {
  return (
    <ContactContainer>
      <Avatar />
      <ContentContaienr>
        <TouchableOpacity {...props}>
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
        </TouchableOpacity>
      </ContentContaienr>

      {type === 'message' && (
        <InfoContainer>
          <TouchableOpacity>
            <Hour>20:58</Hour>
            <Icon name="volume-off" />
          </TouchableOpacity>
        </InfoContainer>
      )}

      {type === 'call' && (
        <InfoContainer>
          <TouchableOpacity>
            <CallIcon type="videocall" />
          </TouchableOpacity>
        </InfoContainer>
      )}
    </ContactContainer>
  );
}
