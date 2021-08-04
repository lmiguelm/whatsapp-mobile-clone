import React, { useState } from 'react';
import { useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AvatarModal } from './Modal/indes';

import { AvatarImg } from './styles';

export function Avatar() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleShowModal() {
    setShowModal(true);
  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleShowModal}>
        <AvatarImg source={{ uri: 'https://github.com/lmiguelm.png' }} />
      </TouchableWithoutFeedback>

      <AvatarModal showModal={showModal} closeModal={handleCloseModal} />
    </>
  );
}
