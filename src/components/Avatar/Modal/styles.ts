import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const ModalContent = styled.View`
  align-items: center;
  align-self: center;

  margin-top: -100px;

  height: 350px;
  width: 100%;
  margin: 30px;
`;

export const ModalImageContainer = styled.View`
  background-color: #fff;
  height: 300px;
  width: 100%;
`;

export const ModalImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 300px;
  width: 100%;
`;

export const ModalFooter = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled(MaterialIcons)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 28px;
`;
