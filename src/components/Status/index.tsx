import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Avatar } from '../Avatar/indes';

import { ContactContainer, ContentContaienr, Hour, Name, MessageInfoContainer } from './styles';

export function Status() {
  return (
    <ContactContainer>
      <Avatar />
      <ContentContaienr>
        <TouchableWithoutFeedback>
          <Name>Miguel</Name>

          <MessageInfoContainer>
            <Hour numberOfLines={1}>Today, 14:20</Hour>
          </MessageInfoContainer>
        </TouchableWithoutFeedback>
      </ContentContaienr>
    </ContactContainer>
  );
}
