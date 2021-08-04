import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import { ModalContent, ModalImage, ModalFooter, ModalImageContainer, Icon } from './styles';

type AvatarModalPropsType = {
  showModal: boolean;
  closeModal: () => void;
};

export function AvatarModal({ showModal, closeModal }: AvatarModalPropsType) {
  return (
    <Modal
      animationIn="zoomInLeft"
      animationOut="zoomOutLeft"
      animationInTiming={500}
      isVisible={showModal}
      onBackdropPress={closeModal}
    >
      <ModalContent>
        <ModalImageContainer>
          <ModalImage source={{ uri: 'https://github.com/lmiguelm.png' }} />
        </ModalImageContainer>

        <ModalFooter>
          <BorderlessButton onPress={() => console.log('ok')}>
            <Icon name="chat" />
          </BorderlessButton>

          <BorderlessButton>
            <Icon name="call" />
          </BorderlessButton>

          <BorderlessButton>
            <Icon name="videocam" />
          </BorderlessButton>

          <BorderlessButton>
            <Icon name="info-outline" />
          </BorderlessButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
