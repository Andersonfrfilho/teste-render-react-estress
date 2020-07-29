import types from 'medical-report/types';
import moment from 'moment';
import { push } from 'react-router-redux';

export const getReport = ({ id, start_date, end_date }) => dispatch => dispatch({
  type: types.GET_PATIENT,
  payload: {
    request: {
      url: `panel/patient/${id}`,
      method: 'GET',
      data: {
        id,
      },
    },
  },
}).then(response => dispatch({
  type: types.GET_REPORT,
  payload: {
    request: {
      url: `panel/medical-report/${id}/details`,
      method: 'GET',
      params: {
        id,
        start_date,
        end_date,
      },
    },
  },
}))
  .catch((error) => {
    if (error.response.status === 403) {
      dispatch(push('/'));
    }
  });

export const getReportDetails = ({ id, start_date, end_date }) => dispatch => dispatch({
  type: types.GET_REPORT,
  payload: {
    request: {
      url: `panel/medical-report/${id}/details`,
      method: 'GET',
      params: {
        id,
        start_date,
        end_date,
      },
    },
  },
});

export const getPatient = id => dispatch => dispatch({
  type: types.GET_PATIENT,
  payload: {
    request: {
      url: 'panel/patient/get',
      method: 'POST',
      data: {
        id,
      },
    },
  },
});

export const getReports = data => (dispatch, getState) => {
  const { list: { paginationReports } } = getState().get('medicalReport').toJS();
  return dispatch({
    type: types.GET_REPORTS,
    payload: {
      request: {
        url: `panel/medical-report/${data.id}/reports`,
        method: 'GET',
        params: {
          ...paginationReports,
          ...data,
        },
      },
    },
  });
};

export const downloadPdfEspecify = (id, report_file_name, enqueueSnackbar) => (dispatch, getState) => {
  const { auth } = getState().get('login').toJS();
  dispatch({ type: types.DOWNLOAD_PDF });
  return fetch(
    `${process.env.API}/panel/medical-report/${id}/report/download/pdf`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
    },
  )
    .then((response) => {
      if (response.status !== 200) {
        enqueueSnackbar('Houve um problema com a solicitação. Tente novamente, mais tarde.', {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          variant: 'error',
        });
      }

      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${report_file_name}`);

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
      dispatch({ type: types.DOWNLOAD_PDF_SUCCESS });
    })
    .catch((response) => {
      dispatch({ type: types.DOWNLOAD_PDF_FAIL });
      return response.error;
    });
};

export const downloadPdf = (id, enqueueSnackbar, reportStartDate, reportEndDate, info) => (dispatch, getState) => {
  const { auth } = getState().get('login').toJS();
  dispatch({ type: types.DOWNLOAD_PDF });
  return fetch(
    `${process.env.API}/panel/medical-report/${id}/report?start=${reportStartDate}&end=${reportEndDate}&info=${encodeURI(info)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
    },
  )
    .then(async (response) => {
      if (response.status !== 200) {
        enqueueSnackbar('Houve um problema com a solicitação. Tente novamente, mais tarde.', {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          variant: 'error',
        });
      }

      await dispatch(getReports({ id }));

      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report-${id}.pdf`);

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
      dispatch({ type: types.DOWNLOAD_PDF_SUCCESS });
    })
    .catch((response) => {
      dispatch({ type: types.DOWNLOAD_PDF_FAIL });
      return response.error;
    });
};
export const requestReportList = data => (dispatch, getState) => {
  const { list: { paginationReports } } = getState().get('medicalReport').toJS();

  return dispatch({
    type: types.GET_REPORTS,
    payload: {
      request: {
        url: `panel/medical-report/${data.patient.id}/reports`,
        method: 'GET',
        params: {
          ...paginationReports,
          ...data,
        },
      },
    },
  });
};
