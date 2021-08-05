import React from 'react';
import { View, FlatList } from 'react-native';
import { Contact } from '../../components/Contact';

export function ChatList() {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Contact isChatMessage />}
      />
    </View>
  );
}
