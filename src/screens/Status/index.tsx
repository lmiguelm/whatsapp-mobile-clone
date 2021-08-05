import React from 'react';
import { FlatList, View } from 'react-native';
import { useTheme } from 'styled-components';

import { Status as StatusComponent } from '../../components/Status';

export function Status() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <StatusComponent />}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </View>
  );
}
