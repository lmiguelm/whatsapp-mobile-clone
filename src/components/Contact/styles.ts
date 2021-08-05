import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const ContactContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

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

type StatusCallIconProps = {
  status: 'accepted' | 'rejected';
};

export const StatusCallIcon = styled(MaterialIcons)<StatusCallIconProps>`
  color: ${({ status, theme }) =>
    status === 'accepted' ? theme.colors.primary : theme.colors.danger};
  font-size: 16px;
`;

type StatusMesasgeIconProps = {
  status: 'sent' | 'received' | 'seen';
};

export const StatusMesasgeIcon = styled(MaterialIcons).attrs<StatusMesasgeIconProps>(
  ({ status }) => ({
    name: status === 'sent' ? 'check' : 'done-all',
  })
)<StatusMesasgeIconProps>`
  color: ${({ status, theme }) => (status === 'seen' ? theme.colors.info : theme.colors.textMuted)};
  font-size: 16px;
`;

type CallIconProps = {
  type: 'call' | 'videocall';
};

export const CallIcon = styled(MaterialIcons).attrs<CallIconProps>(({ type }) => ({
  name: type === 'call' ? 'call' : 'videocam',
}))`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 24px;
`;

export const Message = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  margin-right: 20px;
`;

export const InfoContainer = styled.View`
  align-items: center;
`;

export const Hour = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 5px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 12px;
`;
