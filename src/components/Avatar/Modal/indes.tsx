import React from 'react';
import { TouchableOpacity } from 'react-native';
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
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chat" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="call" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="videocam" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="info-outline" />
          </TouchableOpacity>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
