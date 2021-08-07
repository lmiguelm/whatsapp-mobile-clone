import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: #000;
  padding-top: ${`${getStatusBarHeight()}px`};
  height: ${`${Dimensions.get('window').height}px`};
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  justify-content: space-between;
`;

export const ProgressContainer = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.textMuted};
  margin-top: 10px;
`;

export const Header = styled.View``;

export const HeaderContainer = styled.View`
  flex-direction: row;
`;

export const HeaderContent = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  align-items: center;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 18px;
`;

export const Time = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const Picture = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

type ProgressType = {
  currentProgress: string;
};

export const Progress = styled.View<ProgressType>`
  background-color: ${(props) => props.theme.colors.info};
  height: 100%;
  width: ${(props) => props.currentProgress};
`;

export const HeaderFooter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const Main = styled.Image`
  height: 400px;
  width: 400px;

  align-self: center;
`;

export const Footer = styled.View`
  height: 100px;
  width: 100px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Reply = styled.Text`
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`;
