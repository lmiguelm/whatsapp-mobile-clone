import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 0 20px 20px 0;

  align-items: center;
`;

export const FirstButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 60px;
  width: 60px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const SecondButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 45px;
  width: 45px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Icon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textBase};
`;
