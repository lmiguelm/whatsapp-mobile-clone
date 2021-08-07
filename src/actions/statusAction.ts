import { StatusType } from '../reducers/status/types';

export const showModalStatus = () => ({
  type: StatusType.SHOW_MODAL_STATUS,
});

export const hideModalStatus = () => ({
  type: StatusType.HIDE_MODAL_STATUS,
});
