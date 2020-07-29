import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, colors, Typography } from '@material-ui/core';

export default function SectionIcon(props) {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 100,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: props.color,
      marginRight: 16,
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      backgroundColor: props.color,
      padding: 16,
    },

    label: {
      color: props.color,
      marginTop: 8,
      fontSize: 12,
      textAlign: 'center',
    },
  }));
  const classes = useStyles();

  return (
    <Box
      component="div"
      borderRight={3}
      className={classes.container}
    >
      <Avatar
        className={classes.large}
        src={props.src}
      />
      <Typography className={classes.label}>
        {props.label}
      </Typography>
    </Box>
  );
}
