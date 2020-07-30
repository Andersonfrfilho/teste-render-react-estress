import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const UseStyles = makeStyles(theme => ({
  centerDiv: {
    alignItems: 'center',
    marginBottom: 25,
    width: 1160,
  },
  div: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  border: {
    width: 80,
    height: 60,
    display: 'flex',
    // backgroundColor: 'blue',
    borderRight: '1px solid #d3d3d3',
    borderLeft: '1px solid #d3d3d3',
    borderBottom: '1px solid #d3d3d3',
  },

  bars: {
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default UseStyles;
