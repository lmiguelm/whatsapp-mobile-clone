import { AnyAction } from 'redux';
import { StatusType } from './types';

export type StatusReducerType = {
  showModalStatus: boolean;
};

const INITIAL_STATE: StatusReducerType = {
  showModalStatus: false,
};

export function Status(state = INITIAL_STATE, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case StatusType.SHOW_MODAL_STATUS:
      return { ...state, showModalStatus: true };
    case StatusType.HIDE_MODAL_STATUS:
      return { ...state, showModalStatus: false };
    default:
      return state;
  }
}
