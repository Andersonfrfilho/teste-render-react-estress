import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GetApp } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight: 900,
    overflow: 'scroll',
  },
});

export default function TableHeadReport({
  data, loading, onDownloadEspecifyPDF,
}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Gerado por </TableCell>
            <TableCell align="left">Periodo do relatório</TableCell>
            <TableCell align="left">Glicemia média</TableCell>
            <TableCell align="left">Var. glicêmica</TableCell>
            <TableCell align="left">Tempo no alvo</TableCell>
            <TableCell align="left">Tempo em Hiper</TableCell>
            <TableCell align="left">Tempo em Hipo</TableCell>
            <TableCell align="left">Baixar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && (
            <TableRow key={'index'.toString()}>
              <TableCell align="left">{`${data.user.name} em ${moment(data.created_at).format('HH:mm DD/MM/YYYY')}`}</TableCell>
              <TableCell align="left">{`${moment(data.report_start).format('DD/MM/YYYY')} -> ${moment(data.report_end).format('DD/MM/YYYY')}`}</TableCell>
              <TableCell align="left">{`${data.average_bgl} mg/DL`}</TableCell>
              <TableCell align="left">{`${data.var_bgl}%`}</TableCell>
              <TableCell align="left">{`${data.time_in_range}%`}</TableCell>
              <TableCell align="left">{`${data.time_in_hiper}%`}</TableCell>
              <TableCell align="left">{`${data.time_in_hipo}%`}</TableCell>
              <TableCell align="left">
                <Button
                  style={{ backgroundColor: '#009691' }}
                  onClick={() => {
                    if (loading.pdf) {
                      return false;
                    }

                    return onDownloadEspecifyPDF(data.id, data.report_file_name);
                  }}
                >
                  {
                    loading.pdf ? (
                      <CircularProgress size={15} className={classes.buttonLoading} style={{ color: '#fff' }} />
                    ) : <GetApp style={{ color: '#fff' }} />
                  }

                </Button>
              </TableCell>
            </TableRow>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>);
}
