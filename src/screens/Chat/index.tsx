import React from 'react';

import { Container, Content } from './styles';

import wallpaperDark from '../../assets/wallpaper-dark.png';
import wallpaperLight from '../../assets/wallpaper-light.png';
import { Input } from '../../components/Input';

export function Chat() {
  return (
    <Container>
      <Content source={wallpaperDark} />
      <Input />
    </Container>
  );
}
