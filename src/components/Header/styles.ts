import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${`${Dimensions.get('screen').width}px`};
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const Icon = styled(MaterialIcons)`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 24px;
`;
