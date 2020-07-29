import produce from 'immer';
import { report, reports_list, reports } from './data';

const INITIAL_STATE = {
  isLoading: true,
  loading: {
    patient: true,
    report: true,
    pdf: false,
  },
  paginationReports: {
    total: 0,
    pageSize: 0,
    current: 0,
  },
  report,
  patient: {},
  reportStartDate: '',
  reportEndDate: '',
  reports_list,
  reports,
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
