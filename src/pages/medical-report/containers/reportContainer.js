import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import get from 'utils/get';
import { ReportScreen } from 'medical-report/screens';
import { push } from 'react-router-redux';
import * as actions from 'medical-report/actions/list';
import { useSnackbar } from 'notistack';

function ReportContainer(props) {
  const [info, setInfo] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    props.getReport({
      id: props.match.params.id,
      start_date: props.period.start_date ? moment(props.period.start_date).format('YYYY/MM/DD') : moment().format('YYYY/MM/DD'),
      end_date: props.period.end_date ? moment(props.period.end_date).format('YYYY/MM/DD') : moment().format('YYYY/MM/DD'),
    });
    props.getReports({
      id: props.match.params.id,
    });
  }, []);

  const filterSubmit = (values) => {
    props.getReportDetails({
      id: props.match.params.id,
      start_date: moment(values.start_date).format('YYYY/MM/DD'),
      end_date: moment(values.end_date).format('YYYY/MM/DD'),
    });
  };

  const handleDownloadPdf = (id) => {
    props.downloadPdf(id, enqueueSnackbar, props.reportStartDate, props.reportEndDate, info);
  };

  return (
    <ReportScreen
      isLoading={props.loading.patient}
      isLoadingPdf={props.loading.pdf}
      loading={props.loading}
      report={props.report}
      reports={props.reports}
      reports_list={props.reports_list}
      paginationReports={props.paginationReports}
      push={props.push}
      patient={props.patient}
      filterSubmit={filterSubmit}
      reportStartDate={props.reportStartDate}
      reportEndDate={props.reportEndDate}
      user={props.user}
      onDownloadPdf={handleDownloadPdf}
      onDownloadEspecifyPDF={props.downloadPdfEspecify}
      initialValues={props.period}
      info={info}
      setInfo={setInfo}
      id={props.match.params.id}
      requestReportList={props.requestReportList}
    />
  );
}

const mapStateToProps = state => ({
  user: get(state, 'login.auth.user'),
  report: get(state, 'medicalReport.list.report'),
  reports: get(state, 'medicalReport.list.reports'),
  reports_list: get(state, 'medicalReport.list.reports_list'),
  paginationReports: get(state, 'medicalReport.list.paginationReports'),
  loading: get(state, 'medicalReport.list.loading'),
  patient: get(state, 'medicalReport.list.patient'),
  reportStartDate: get(state, 'medicalReport.list.reportStartDate'),
  reportEndDate: get(state, 'medicalReport.list.reportEndDate'),
  period: get(state, 'monitoring.details.period'),

});

const mapActionsToProps = {
  ...actions,
  push,
};

export default connect(mapStateToProps, mapActionsToProps)(ReportContainer);
