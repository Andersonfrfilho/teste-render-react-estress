import React from 'react';
import {
  Grid,
  Typography,
  Button,
  IconButton,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import { ArrowLeft } from 'mdi-material-ui';
import { Formik } from 'formik';
import moment from 'moment';
import debounce from 'lodash.debounce';
import { KeyboardDatePicker } from '@material-ui/pickers';
import UseStyles from './styles';

export default function ReportFilter(props) {
  const {
    exam,
  } = props.patient;
  const classes = UseStyles();

  const handleBack = () => {
    if (props.user.profile.group === 'patient' || !props.patient.id) {
      return props.push('/');
    }

    return props.push(`/monitoring/${props.patient.id}`);
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{
          ...props.initialValues,
          start_date: props.initialValues?.start_date || moment(),
          end_date: props.initialValues?.end_date || moment(),
        }}
        // validationSchema={ValidationSchema(props)}
        onSubmit={debounce(props.filterSubmit, 1000)}
      >
        {(props) => {
          const {
            values,
            setFieldValue,
            handleSubmit,
          } = props;

          return (
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <IconButton onClick={handleBack}>
                  <ArrowLeft />
                </IconButton>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    className={classes.maxInput}
                    name="start_date"
                    disableToolbar
                    variant="inline"
                    // minDate={moment(exam.start_date)}
                    // minDateMessage={`Data de início deve ser maior ou igual do que o início do exame(${moment(exam.start_date).format('DD/MM/YYYY')})`}
                    maxDate={moment()}
                    maxDateMessage={
                      exam && exam.end_date
                        ? `Data de início deve ser menor ou igual do que hoje(${moment(exam.end_date).format('DD/MM/YYYY')})`
                        : `Data de início deve ser menor ou igual a data de hoje (${moment().format('DD/MM/YYYY')})`
                    }
                    format="DD/MM/YYYY"
                    label="Início do relatório"
                    invalidDateMessage="Insira um formato de data válido"
                    value={values.start_date}
                    onChange={date => setFieldValue('start_date', date)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    className={classes.maxInput}
                    name="end_date"
                    disableToolbar
                    variant="inline"
                    // minDate={moment(exam.start_date)}
                    // minDateMessage={`Data fim deve ser maior ou igual do que o início do exame(${moment(exam.start_date).format('DD/MM/YYYY')})`}
                    maxDate={moment()}
                    maxDateMessage={
                      exam && exam.end_date
                        ? `Data fim deve ser menor ou igual do que hoje(${moment().format('DD/MM/YYYY')})`
                        : `Data fim deve ser menor ou igual a data de hoje (${moment().format('DD/MM/YYYY')})`
                    }
                    format="DD/MM/YYYY"
                    label="Fim do relatório"
                    invalidDateMessage="Insira um formato de data válido"
                    value={values.end_date}
                    onChange={date => setFieldValue('end_date', date)}
                  />
                </FormControl>
                {
                  values.start_date && values.end_date
                  && moment(values.start_date).format('YYYY/MM/DD') > moment(values.end_date).format('YYYY/MM/DD') ? (
                    <FormHelperText error>Data fim menor que data início</FormHelperText>
                    ) : null
                }
              </Grid>
              <Grid item xs={2} style={{ paddingTop: 24 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    const endDate = exam.end_date ? moment(exam.end_date).format('YYYY/MM/DD') : moment().format('YYYY/MM/DD');
                    const startDateFilter = moment(values.start_date).format('YYYY/MM/DD');
                    const endDateFilter = moment(values.end_date).format('YYYY/MM/DD');

                    if (
                      moment(values.start_date).isValid() && moment(values.end_date).isValid()
                      && startDateFilter <= endDate
                      && endDateFilter <= endDate
                      && !(startDateFilter > endDateFilter)
                    ) {
                      handleSubmit();
                    }
                  }}
                >
                  <Typography>Aplicar</Typography>
                </Button>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </Grid>
  );
}
