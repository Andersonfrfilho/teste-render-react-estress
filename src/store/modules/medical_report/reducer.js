import produce from 'immer';
import { report, reports_list, reports, complet } from './data';

const INITIAL_STATE = {
  ...complet,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@home/ADD_TO_REPOSITORY':
      return produce(state, draft => {
        draft.repositories = action.payload.repositories;
      });
    case '@home/ADD_TO_USER':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
}
