import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const InfoContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;

  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export const ContentContaienr = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 10px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 18px;
`;

export const ImageContainer = styled.View`
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(MaterialIcons)`
  font-size: 32px;
  color: #fff;
`;
