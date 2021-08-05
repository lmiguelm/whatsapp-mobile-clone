import React from 'react';
import { Status } from '../Status';

import { Container, Title } from './styles';

export function HeaderStatus() {
  return (
    <Container>
      <Status isMyStatus />
      <Title>Viewed updates</Title>
    </Container>
  );
}
