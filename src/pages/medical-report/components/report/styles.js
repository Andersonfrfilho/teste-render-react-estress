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
    padding: 15,
  },
  button: {
    color: '#fff',
    marginLeft: 8,
    border: '1px solid rgba(255, 255, 255, 0.8)',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 6,
  },

  section: {
    marginTop: 16,
  },

  warningBox: {
    margin: 16,
    backgroundColor: colors.grey[200],
    padding: 8,
  },

  bold: {
    fontWeight: 'bold',
    marginRight: 8,
  },

  italic: {
    fontStyle: 'italic',
    marginRight: 8,
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: colors.amber[900],
    padding: 16,
  },

  textArea: {
    width: '100%',
    marginBottom: 16,
  },

  glicemicCicleTitle: {
    color: colors.amber[900],
    margin: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },

  weeklyCycleTitle: {
    margin: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  spaceLeft: {
    marginLeft: 140,
    width: 1000,
  },

}));

export default UseStyles;
