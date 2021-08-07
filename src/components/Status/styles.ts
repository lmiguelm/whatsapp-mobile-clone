import styled from 'styled-components/native';

export const ContactContainer = styled.TouchableOpacity.attrs({
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

export const MessageInfoContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  margin-right: 10px;
`;

export const Hour = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 5px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
`;

export const StatusContainer = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: transparent;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const StatusImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 30px;
`;
