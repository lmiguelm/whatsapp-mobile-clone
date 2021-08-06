import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type IconPropsType = {
  name: string;
};

export const Container = styled.View`
  padding-top: ${`${getStatusBarHeight()}px`};
  padding-left: 10px;
  padding-right: 10px;

  height: 80px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const Icon = styled(MaterialIcons).attrs<IconPropsType>((props) => ({
  name: props.name,
}))`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 30px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.textMuted};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.textMuted};
`;
