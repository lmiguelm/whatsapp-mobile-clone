import 'styled-components/native';

import { DarkTheme } from './theme/dark';

export type Theme = typeof DarkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
