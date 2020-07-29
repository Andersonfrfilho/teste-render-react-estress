import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },

}));

export default function Property(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography className={props.labelStyle}>{props.label}:</Typography>
      <Typography className={props.valueStyle}>{props.value}</Typography>
    </Grid>
  );
}
