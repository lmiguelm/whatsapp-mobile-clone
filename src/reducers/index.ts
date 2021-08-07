import { combineReducers } from 'redux';

import { Screen, ScreenReduderType } from './screen';
import { Status, StatusReducerType } from './status';

export type StoreType = {
  Screen: ScreenReduderType;
  Status: StatusReducerType;
};

export const reducers = combineReducers({
  Screen,
  Status,
});
