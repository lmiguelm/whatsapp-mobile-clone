import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RightContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const InfoContainer = styled.View`
  margin-left: 20px;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textBase};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Icon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
`;
