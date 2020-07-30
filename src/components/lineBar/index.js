import React from 'react';
import { Grid } from '@material-ui/core';
import Bar from 'medical-report/components/bar';
import { range } from 'ramda';
import UseStyles from './styles';

const hours = [
  '00:00-02:00',
  '02:00-04:00',
  '04:00-06:00',
  '06:00-08:00',
  '08:00-10:00',
  '10:00-12:00',
  '12:00-14:00',
  '14:00-16:00',
  '16:00-18:00',
  '18:00-20:00',
  '20:00-22:00',
  '22:00-24:00',
];

export default function LineBar(props) {
  const classes = UseStyles();

  return (
    <Grid container direction="row" spacing={1} >
      <Grid item xs={2}>
        <Grid container direction="row">
          <Grid item xs={2}>
            <div style={{ backgroundColor: props.color }} className={classes.div} />
          </Grid>
          <Grid item xs={10}>
            <div>{props.title}</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="row" >
          <div className={classes.bars} >
            {hours.map((hour, index) =>
              (
                <Bar
                  key={index.toString()}
                  color={props.color}
                  min={props.min}
                  max={props.max}
                  value={props.values[hour]}
                  title={`${props.values[hour]}${props.percentage ? '%' : ''}`}
                />
              ),
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
