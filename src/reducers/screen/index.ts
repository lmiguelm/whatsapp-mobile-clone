import { AnyAction } from 'redux';
import { ScreenTypes } from './type';

export type ScreenType = 'Chats' | 'Status' | 'Calls' | null;

export type ScreenReduderType = {
  currentScreen: ScreenType;
};

const INITIAL_STATE: ScreenReduderType = {
  currentScreen: 'Chats',
};

export function Screen(state = INITIAL_STATE, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case ScreenTypes.CHANGE_CURRENT_SCREEN:
      return { ...state, currentScreen: payload };
    default:
      return state;
  }
}
