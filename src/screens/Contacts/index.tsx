import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Contact } from '../../components/Contact';
import { ListContactHeader } from '../../components/Headers/ListContactsHeader';

import { Container } from './styles';

export function Contacts() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  const { navigate } = useNavigation<any>();

  function handleNavigateToChatScreen() {
    navigate({ name: 'Chat' });
  }

  return (
    <Container>
      <FlatList
        ListHeaderComponent={<ListContactHeader />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact type="info" onPress={handleNavigateToChatScreen} />}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </Container>
  );
}
