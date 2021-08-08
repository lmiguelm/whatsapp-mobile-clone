import React, { useEffect, useState } from 'react';
import { Camera as ExpoCamera } from 'expo-camera';

import {
  Button,
  ButtonsControll,
  Container,
  Content,
  Icon,
  ImagesGalery,
  InfoText,
  Image,
} from './styles';

import { TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export function Camera() {
  const cameraRef = useRef<ExpoCamera>(null);

  const { navigate } = useNavigation<any>();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<'front' | 'back'>('back');
  const [flash, setFlash] = useState<'off' | 'on'>('off');

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function toggleFlash() {
    setFlash((oldstate) => (oldstate === 'off' ? 'on' : 'off'));
  }

  function toggleCamera() {
    setType((oldstate) => (oldstate === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    await cameraRef.current?.takePictureAsync();
  }

  if (hasPermission === false) {
    navigate('ChatList');
  }

  return (
    <Container ref={cameraRef} type={type} flashMode={flash} ratio="16:9">
      <Content>
        <Icon name="keyboard-arrow-up" />

        <ImagesGalery horizontal showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
          <Image source={{ uri: 'https://github.com/lmiguelm.png' }} />
        </ImagesGalery>

        <ButtonsControll>
          <TouchableOpacity onPress={toggleFlash}>
            {flash == 'off' ? <Icon name="flash-off" /> : <Icon name="flash-on" />}
          </TouchableOpacity>

          <TouchableOpacity onPress={takePicture}>
            <Button />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleCamera}>
            <Icon name="flip-camera-ios" />
          </TouchableOpacity>
        </ButtonsControll>

        <InfoText>Hold for video, tap for foto</InfoText>
      </Content>
    </Container>
  );
}
