import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Contact } from '../../components/Contact';

import { Container } from './styles';

export function CallList() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  const { navigate } = useNavigation<any>();

  function handleToCallInfo() {
    navigate({ name: 'CallInfo' });
  }

  return (
    <Container>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact type="call" onPress={handleToCallInfo} />}
        showsHorizontalScrollIndicator
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </Container>
  );
}
