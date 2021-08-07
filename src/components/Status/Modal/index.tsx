import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalStatus } from '../../../actions/statusAction';
import { StoreType } from '../../../reducers';

import {
  Container,
  Footer,
  Header,
  HeaderContainer,
  HeaderContent,
  HeaderFooter,
  Icon,
  InfoContainer,
  Main,
  Name,
  Picture,
  Progress,
  ProgressContainer,
  Reply,
  Time,
  UserContainer,
} from './styles';

export const StatusModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((store: StoreType) => store.Status.showModalStatus);

  const modalRef = useRef<Modalize>();

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.open();
      startCount();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  function startCount() {
    let time = 0;
    const max = 30;

    const interval = setInterval(() => {
      time += 1;
      setProgress((100 * time) / max);

      if (time >= max) {
        clearInterval(interval);
        handleCloseModal();
      }
    }, 100);
  }

  function handleCloseModal() {
    setProgress(0);
    dispatch(hideModalStatus());
  }

  return (
    <Modalize
      ref={modalRef}
      onClose={handleCloseModal}
      modalStyle={{
        minHeight: Dimensions.get('window').height,
      }}
    >
      <Container>
        <Header>
          <ProgressContainer>
            <Progress currentProgress={`${progress}%`} />
          </ProgressContainer>

          <HeaderContainer>
            <HeaderContent>
              <TouchableOpacity onPress={handleCloseModal}>
                <Icon name="arrow-back" />
              </TouchableOpacity>

              <UserContainer>
                <Picture source={{ uri: 'https://github.com/lmiguelm.png' }} />

                <InfoContainer>
                  <Name>Miguel</Name>
                  <Time>Yesterday, 12:20</Time>
                </InfoContainer>
              </UserContainer>
            </HeaderContent>

            <HeaderFooter>
              <TouchableOpacity>
                <Icon name="more-vert" />
              </TouchableOpacity>
            </HeaderFooter>
          </HeaderContainer>
        </Header>

        <Main
          resizeMode="contain"
          source={{
            uri: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
          }}
        />

        <Footer>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Icon name="keyboard-arrow-up" />
            <Reply>REPLY</Reply>
          </TouchableOpacity>
        </Footer>
      </Container>
    </Modalize>
  );
};
