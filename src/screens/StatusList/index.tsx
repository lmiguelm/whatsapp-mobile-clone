import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { HeaderStatus } from '../../components/HeaderStatus';

import { Status as StatusComponent } from '../../components/Status';
import { StatusModal } from '../../components/Status/Modal';

import { Container } from './styles';

export function StatusList() {
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

      <StatusModal />
    </Container>
  );
}
