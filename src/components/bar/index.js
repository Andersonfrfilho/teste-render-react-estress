import React from 'react';
import UseStyles from './styles';

export default function Bar(props) {
  const classes = UseStyles();

  const { min, max, value } = props;
  const diferenceMax = max - min;
  const diferenceValue = value - min;
  const porcent = (diferenceValue / diferenceMax) * 100;

  return (
    <div className={classes.border}>
      <div style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
      >
        <span className={classes.title}>{props.title}</span>
        <div style={{
          height: `${porcent}%`,
          width: '40%',
          backgroundColor: props.color,
        }}
        />
      </div>
    </div>
  );
}
