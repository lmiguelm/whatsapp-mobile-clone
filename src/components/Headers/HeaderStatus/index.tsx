import React from 'react';
import { Status } from '../../Status';

import { Container, Title, Range } from './styles';

export function HeaderStatus() {
  return (
    <Container>
      <Status isMyStatus />
      <Range>
        <Title>Viewed updates</Title>
      </Range>
    </Container>
  );
}
