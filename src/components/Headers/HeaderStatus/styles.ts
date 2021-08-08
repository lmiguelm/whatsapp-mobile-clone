import styled from 'styled-components/native';

export const Container = styled.View``;

export const Range = styled.View`
  background-color: ${(props) =>
    props.theme.title === 'light' ? '#ddd' : props.theme.colors.backgroundPrimary};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textMuted};
  font-family: ${(props) => props.theme.fonts.bold};
  margin: 5px 10px;
`;
