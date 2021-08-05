import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { HeaderStatus } from '../../components/HeaderStatus';

import { Status as StatusComponent } from '../../components/Status';

import { Container } from './styles';

export function Status() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  return (
    <Container>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <StatusComponent />}
        ListHeaderComponent={() => <HeaderStatus />}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </Container>
  );
}
