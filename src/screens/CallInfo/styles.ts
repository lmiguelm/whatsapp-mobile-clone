import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.backgroundSecondary};
  margin: 10px;
  padding: 0 0 10px 0;
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
  justify-content: space-around;
  margin-left: 20px;
`;

export const InfoContainer = styled.View`
  padding: 0px 25px 0 10px;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 14px;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
`;

export const Content = styled.View``;
