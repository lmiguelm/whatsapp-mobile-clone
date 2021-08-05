import React from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { Contact } from '../../components/Contact';

export function CallList() {
  const {
    colors: { backgroundPrimary },
  } = useTheme();

  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact type="call" />}
        showsHorizontalScrollIndicator
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: backgroundPrimary,
        }}
      />
    </View>
  );
}
