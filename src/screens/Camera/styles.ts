import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(Camera)`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
  height: 250px;

  position: absolute;
  bottom: 0;
`;

export const Icon = styled(MaterialIcons)`
  align-self: center;
  color: #fff;
  font-size: 24px;
`;

export const ImagesGalery = styled.ScrollView`
  flex: 1;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ButtonsControll = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 80px;
  border-width: 2px;
  border-color: #fff;
`;

export const InfoText = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 16px;
`;
