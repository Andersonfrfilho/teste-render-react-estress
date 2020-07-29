import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const UseStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 6,
  },
  card: {
    display: 'flex',
    alignContent: 'column',
    marginRight: 16,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  button: {
    color: '#fff',
    marginLeft: 8,
    border: '1px solid rgba(255, 255, 255, 0.8)',
  },
  buttonLoading: {
    color: '#fff',
    marginRight: 8,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

}));

export default UseStyles;
