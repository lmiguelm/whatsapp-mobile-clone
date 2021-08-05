import { combineReducers } from 'redux';

import { Screen, ScreenReduderType } from './screen';

export type StoreType = {
  Screen: ScreenReduderType;
};

export const reducers = combineReducers({
  Screen,
});
