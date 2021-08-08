import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import MenuMaterial from 'react-native-material-menu';

export const Container = styled.View`
  height: 80px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  padding-top: ${`${getStatusBarHeight()}px`};
  padding-left: 10px;
  padding-right: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;
export const RightContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.textBase};
  font-size: 20px;
  margin-left: 5px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: 22px;
  color: ${(props) => props.theme.colors.textBase};
`;

export const Menu = styled(MenuMaterial)`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const MenuItemText = styled.Text`
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.regular};
`;
