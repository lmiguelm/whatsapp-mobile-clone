import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalStatus } from '../../actions/statusAction';

import {
  ContactContainer,
  ContentContaienr,
  Hour,
  Name,
  MessageInfoContainer,
  StatusContainer,
  StatusImage,
} from './styles';

type StatusPropsType = {
  isMyStatus?: boolean;
};

export function Status({ isMyStatus = false }: StatusPropsType) {
  const dispatch = useDispatch();

  function handleShowModalStatus() {
    dispatch(showModalStatus());
  }

  return (
    <ContactContainer onPress={handleShowModalStatus}>
      <StatusContainer>
        <StatusImage
          source={{
            uri: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
          }}
        />
      </StatusContainer>

      <ContentContaienr>
        <Name>{isMyStatus ? 'My status' : 'Miguel'}</Name>

        <MessageInfoContainer>
          <Hour numberOfLines={1}>Today, 14:20</Hour>
        </MessageInfoContainer>
      </ContentContaienr>
    </ContactContainer>
  );
}
