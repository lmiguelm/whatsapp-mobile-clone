import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from '../Avatar/indes';

import { InfoContainer, ContentContaienr, Name, ImageContainer, Image } from './styles';

export function ListContactHeader() {
  return (
    <>
      <TouchableOpacity>
        <InfoContainer>
          <ImageContainer>
            <Image name="group" />
          </ImageContainer>
          <ContentContaienr>
            <Name>New Group</Name>
          </ContentContaienr>
        </InfoContainer>
      </TouchableOpacity>

      <TouchableOpacity>
        <InfoContainer>
          <ImageContainer>
            <Image name="person-add" />
          </ImageContainer>
          <ContentContaienr>
            <Name>New contact</Name>
          </ContentContaienr>
        </InfoContainer>
      </TouchableOpacity>
    </>
  );
}
