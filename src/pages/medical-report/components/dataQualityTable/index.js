import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 4,
  },

  title: {
    fontWeight: 'bold',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));

export default function DataQualityTable(props) {
  const classes = useStyles();

  const { data } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography className={classes.title}>
          Registros
        </Typography>
        <Typography>
          Glicemia
        </Typography>
        <Typography>
          Alimentação
        </Typography>
        <Typography>
          Bolus
        </Typography>
        <Typography>
          Basal
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.column}>
        <Typography className={classes.title}>
          Dias com registro
        </Typography>
        <Typography>
          {data.glycemia.total || '-'}
        </Typography>
        <Typography>
          {data.meal.total || '-'}
        </Typography>
        <Typography>
          {data.bolus.total || '-'}
        </Typography>
        <Typography>
          {data.basal.total || '-'}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.column}>
        <Typography className={classes.title}>
          Registros/Dia
        </Typography>
        <Typography>
          {data.glycemia.average || '-'}
        </Typography>
        <Typography>
          {data.meal.average || '-'}
        </Typography>
        <Typography>
          {data.bolus.average || '-'}
        </Typography>
        <Typography>
          {data.basal.average || '-'}
        </Typography>
      </Grid>
    </Grid>
  );
}
