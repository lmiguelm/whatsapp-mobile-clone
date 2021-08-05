import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';

import { ModalContent, ModalImage, ModalFooter, ModalImageContainer, Icon } from './styles';

type AvatarModalPropsType = {
  showModal: boolean;
  closeModal: () => void;
};

export function AvatarModal({ showModal, closeModal }: AvatarModalPropsType) {
  const {
    colors: { backgroundSecondary },
  } = useTheme();

  return (
    <Modal
      animationIn="zoomInLeft"
      animationOut="zoomOutLeft"
      animationInTiming={500}
      isVisible={showModal}
      onBackdropPress={closeModal}
      backdropColor={backgroundSecondary}
    >
      <ModalContent>
        <ModalImageContainer>
          <ModalImage source={{ uri: 'https://github.com/lmiguelm.png' }} />
        </ModalImageContainer>

        <ModalFooter>
          <BorderlessButton onPress={() => {}}>
            <Icon name="chat" />
          </BorderlessButton>

          <BorderlessButton onPress={() => {}}>
            <Icon name="call" />
          </BorderlessButton>

          <BorderlessButton onPress={() => {}}>
            <Icon name="videocam" />
          </BorderlessButton>

          <BorderlessButton onPress={() => {}}>
            <Icon name="info-outline" />
          </BorderlessButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
