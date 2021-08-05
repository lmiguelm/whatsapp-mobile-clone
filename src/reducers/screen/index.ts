import { AnyAction } from 'redux';

export type ScreenType = 'CallList' | 'Status' | 'ChatList';

export type ScreenReduderType = {
  currentScreen: ScreenType;
};

const INITIAL_STATE: ScreenReduderType = {
  currentScreen: 'ChatList',
};

export function Screen(state = INITIAL_STATE, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
