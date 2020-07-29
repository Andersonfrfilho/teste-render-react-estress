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

export default function FoodTable(props) {
  const classes = useStyles();

  const { data } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography className={classes.title}>
          Consumo Médio diário
        </Typography>
        <Typography>
          Manhã (5h - 11h)
        </Typography>
        <Typography>
          Almoço (11h - 15h)
        </Typography>
        <Typography>
          Tarde (15h - 18h)
        </Typography>
        <Typography>
          Jantar (18h - 00h)
        </Typography>
        <Typography>
          Madrugada (00h - 5h)
        </Typography>
        <Typography className={classes.title}>
          Média diária
        </Typography>
      </Grid>
      <Grid item xs={3} className={classes.column}>
        <Typography className={classes.title}>
          Carboidratos (g)
        </Typography>
        <Typography>
          {data.morning.carbs || '-'}
        </Typography>
        <Typography>
          {data.lunch.carbs || '-'}
        </Typography>
        <Typography>
          {data.afternoon.carbs || '-'}
        </Typography>
        <Typography>
          {data.dinner.carbs || '-'}
        </Typography>
        <Typography>
          {data.night.carbs || '-'}
        </Typography>
        <Typography>
          {data.average.carbs || '-'}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.column}>
        <Typography className={classes.title}>
          Proteínas (g)
        </Typography>
        <Typography>
          {data.morning.prot || '-'}
        </Typography>
        <Typography>
          {data.lunch.prot || '-'}
        </Typography>
        <Typography>
          {data.afternoon.prot || '-'}
        </Typography>
        <Typography>
          {data.dinner.prot || '-'}
        </Typography>
        <Typography>
          {data.night.prot || '-'}
        </Typography>
        <Typography>
          {data.average.prot || '-'}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.column}>
        <Typography className={classes.title}>
          Gorduras (g)
        </Typography>
        <Typography>
          {data.morning.fats || '-'}
        </Typography>
        <Typography>
          {data.lunch.fats || '-'}
        </Typography>
        <Typography>
          {data.afternoon.fats || '-'}
        </Typography>
        <Typography>
          {data.dinner.fats || '-'}
        </Typography>
        <Typography>
          {data.night.fats || '-'}
        </Typography>
        <Typography>
          {data.average.fats || '-'}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.column}>
        <Typography className={classes.title}>
          Energia (kcal)
        </Typography>
        <Typography>
          {data.morning.kcal || '-'}
        </Typography>
        <Typography>
          {data.lunch.kcal || '-'}
        </Typography>
        <Typography>
          {data.afternoon.kcal || '-'}
        </Typography>
        <Typography>
          {data.dinner.kcal || '-'}
        </Typography>
        <Typography>
          {data.night.kcal || '-'}
        </Typography>
        <Typography>
          {data.average.kcal || '-'}
        </Typography>
      </Grid>
    </Grid>
  );
}
