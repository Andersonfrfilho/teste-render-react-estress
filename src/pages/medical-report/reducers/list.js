import { fromJS } from 'immutable';
import types from 'medical-report/types';
import { handleActions, combineActions } from 'redux-actions';
import { report, reports_list, reports } from './data';

const INITIAL_STATE = fromJS({
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
});

const shouldStartLoading = combineActions(
  types.GET_REPORT,
  types.GET_PATIENT,
  types.DOWNLOAD_PDF,
  types.GET_REPORTS
);

const shouldStopLoading = combineActions(
  types.GET_REPORT_SUCCESS,
  types.GET_REPORT_FAIL
);

const shouldStopPdfLoading = combineActions(
  types.DOWNLOAD_PDF_FAIL,
  types.DOWNLOAD_PDF_SUCCESS,
  types.GET_PATIENT_SUCCESS,
  types.GET_PATIENT_FAIL,
  types.GET_REPORTS_SUCCESS,
  types.GET_REPORTS_FAIL,
  types.GET_REPORT_SUCCESS,
  types.GET_REPORT_FAIL
);
const shouldStopReportsLoading = combineActions(
  types.DOWNLOAD_PDF_FAIL,
  types.DOWNLOAD_PDF_SUCCESS,
  types.GET_PATIENT_SUCCESS,
  types.GET_PATIENT_FAIL,
  types.GET_REPORTS_FAIL,
  types.GET_REPORTS_SUCCESS,
  types.GET_REPORT_SUCCESS,
  types.GET_REPORT_FAIL
);
const home = handleActions(
  {
    [shouldStartLoading]: state => state.set('isLoading', true),
    [shouldStopLoading]: state => state.set('isLoading', false),
    [types.GET_REPORT]: (state, { payload }) =>
      state
        .setIn(['loading', 'report'], true)
        .set('reportStartDate', payload.request.params.start_date)
        .set('reportEndDate', payload.request.params.end_date),
    [types.GET_REPORT_SUCCESS]: (state, { payload }) =>
      state
        .set('report', payload.data.result)
        .setIn(['loading', 'report'], false),
    [types.GET_PATIENT]: state => state.setIn(['loading', 'patient'], true),
    [types.GET_PATIENT_SUCCESS]: (state, { payload }) =>
      state
        .set('patient', payload.data.result)
        .setIn(['loading', 'patient'], false),
    [types.DOWNLOAD_PDF]: state => state.setIn(['loading', 'pdf'], true),
    [shouldStopPdfLoading]: state => state.setIn(['loading', 'pdf'], false),
    [types.GET_REPORTS]: state => state.setIn(['loading', 'report'], true),
    [shouldStopReportsLoading]: state =>
      state.setIn(['loading', 'report'], false),
    [types.GET_REPORTS_SUCCESS]: (state, { payload }) =>
      state
        .set('reports_list', payload.data.result.results)
        .set('paginationReports', {
          total: payload.data.result.total,
          pageSize: payload.data.result.pageSize,
          current: payload.data.result.current,
        }),
  },
  INITIAL_STATE
);

export default home;
