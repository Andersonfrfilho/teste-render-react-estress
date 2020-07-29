import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import moment from 'moment';
import { Table } from 'common/components';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const columns = [
  {
    id: 'name',
    label: 'Gerado por',
    render: (value, record) => `${record.user.name} em ${moment(record.created_at).format('HH:mm DD/MM/YYYY')}`,
  },
  {
    id: 'period',
    label: 'Periodo do relatório',
    render: (value, record) => `${moment(record.report_start).format('DD/MM/YYYY')} -> ${moment(record.report_end).format('DD/MM/YYYY')}`,
  },
  {
    id: 'average_bgl',
    label: 'Glicemia média',
    render: value => `${value} mg/DL`,
  },
  {
    id: 'var_bgl',
    label: 'Var. glicêmica',
    render: value => `${value} %`,
  },
  {
    id: 'time_in_range',
    label: 'Tempo no alvo',
    render: value => `${value} %`,
  },
  {
    id: 'time_in_hiper',
    label: 'Tempo em Hiper',
  },
  {
    id: 'time_in_hipo',
    label: 'Tempo em Hipo',
  },
  { id: 'actions', label: 'Baixar' },
];

export default function StickyHeadTable({
  reports_list,
  paginationReports,
  onDownloadEspecifyPDF,
  requestReportList,
  isLoadingPdf,
  id,
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table
        columns={columns}
        data={reports_list}
        pagination={paginationReports}
        getList={requestReportList}
        patient={{ id }}
        rowBodyClick={() => {}}
        actions={(id, record) => (
          <td key={id} style={{ borderBottomColor: '#e0e0e0', borderBottomWidth: 1, borderBottomStyle: 'solid' }}>
            <Button
              style={{ backgroundColor: '#009691', alignSelf: 'center', justifySelf: 'center' }}
              onClick={() => {
                if (isLoadingPdf) {
                  return false;
                }
                return onDownloadEspecifyPDF(record.id, record.report_file_name);
              }}
            >
              {
                isLoadingPdf ? (
                  <CircularProgress size={15} className={classes.buttonLoading} style={{ color: '#fff' }} />
                ) : <GetApp style={{ color: '#fff' }} />
              }
            </Button>
          </td>
        )}
      />
    </Paper>
  );
}
