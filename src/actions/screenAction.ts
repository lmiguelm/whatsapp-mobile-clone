import { ScreenType } from '../reducers/screen';
import { ScreenTypes } from '../reducers/screen/types';

export const changeCurrentScreen = (currentScreen: ScreenType) => ({
  type: ScreenTypes.CHANGE_CURRENT_SCREEN,
  payload: currentScreen,
});
