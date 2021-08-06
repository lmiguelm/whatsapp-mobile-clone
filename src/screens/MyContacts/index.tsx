import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Contact } from '../../components/Contact';

import { Container } from './styles';

export function MyContacts() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  return (
    <Container>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact type="info" />}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </Container>
  );
}
