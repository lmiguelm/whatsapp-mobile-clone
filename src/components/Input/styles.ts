import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  padding: 0 5px;

  position: absolute;
  bottom: 0;

  flex-direction: row;
`;

export const InputContainer = styled.View`
  flex: 1;
  background-color: red;
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: red;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-left: 5px;
  background-color: ${(props) => props.theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(MaterialIcons)`
  font-size: 32px;
  color: #fff;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.textMuted,
}))`
  flex: 1;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;
`;
