import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export function RootNavigate(route: string, params: {} = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(route, params);
  }
}
