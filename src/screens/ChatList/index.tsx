import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Contact } from '../../components/Contact';

import { Container } from './styles';

export function ChatList() {
  const { navigate } = useNavigation<any>();

  const {
    colors: { backgroundPrimary },
  } = useTheme();

  function handleToChatScreen() {
    navigate('Chat');
  }

  return (
    <Container>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact type="message" onPress={handleToChatScreen} />}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </Container>
  );
}
