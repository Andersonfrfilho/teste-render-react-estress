import React, { useState } from 'react';

import { Grid, Typography, CircularProgress, Card, Button, Modal } from '@material-ui/core';
import { Close, GetApp } from '@material-ui/icons';
import { Report, ReportFilter, TableReportScroll, TableHeaderReport } from '../../components';
import UseStyles from './styles';

export default function ReportScreen(props) {
  const classes = UseStyles();
  const [openModal, setOpenModal] = useState(false);
  return (
    <Grid container className={classes.container}>
      <Modal
        open={openModal}
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
      >
        <Grid
          container
          style={{
            margin: 80,
            padding: 12,
            borderRadius: 5,
            backgroundColor: '#EDEAE7',
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: 600,
          }}
        >
          <Grid item xs={10}>
            <Typography variant="h4" className={classes.title} style={{ color: '#999999' }}>Histórico de relatórios</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            className={classes.cardActions}
            style={{
              marginBottom: 20,
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{ backgroundColor: '#A4352E' }}
              className={classes.button}
              onClick={() => setOpenModal(false)}
              loading={props.loading.pdf}

            >

              <Close style={{ color: '#fff' }} />


            </Button>

          </Grid>
          <Grid
            item
            xs={12}
          >
            <TableReportScroll {...props} modalView />
          </Grid>
        </Grid>
      </Modal>
      <Grid item xs={6}>
        <Typography variant="h4" className={classes.title}>Relatório Médico</Typography>
        <Typography className={classes.subtitle}>Nome do paciente: {props.patient?.user?.name}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.cardActions}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => {
            if (!props.loading.pdf) {
              props.onDownloadPdf(props.patient?.id);
            }
          }}
          loading={props.loading.pdf}
        >
          {
            props.loading.pdf ? (
              <CircularProgress size={15} className={classes.buttonLoading} />
            ) : null
          }
          Gerar PDF
        </Button>
      </Grid>
      <Grid item lg={12} className={classes.formContainer}>
        <Card className={classes.card}>
          <Grid container>
            {
              props.reports_list.length ? (
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="h4" className={classes.title} style={{ color: '#000' }}>Último relatório gerado pelo o médico</Typography>
                  </Grid>
                  <Grid item xs={2} className={classes.cardActions}>
                    <Button
                      variant="outlined"
                      className={classes.button}
                      style={{ backgroundColor: '#008691' }}
                      onClick={() => setOpenModal(true)}
                      alignItems="flex-end"
                      loading={props.loading.pdf}
                    >
                    Ver histórico
                    </Button>
                  </Grid>
                  <Grid item xs={12} style={{ marginBottom: 20 }}>
                    <TableHeaderReport data={props.reports_list[0]} {...props} />
                  </Grid>
                </Grid>
              ) : null
            }
            {
              !props.loading.patient ? (
                <ReportFilter
                  patient={props.patient}
                  filterSubmit={props.filterSubmit}
                  push={props.push}
                  user={props.user}
                  initialValues={props.initialValues}
                />
              ) : null
            }

            {!props.isLoading ? (
              <Report
                {...props}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: 20,
                  marginBottom: 20,
                  flexDirection: 'column',
                }}
              >
                <CircularProgress />
                <Typography style={{ marginTop: 20 }}>Compilando dados do paciente. Por favor aguarde um momento.</Typography>
              </div>
            )}

          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
