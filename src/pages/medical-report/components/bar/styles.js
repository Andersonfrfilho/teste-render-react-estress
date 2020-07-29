import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles(() => ({
  border: {
    width: '100%',
    height: 50,
    display: 'flex',
    borderRight: '1px solid #d3d3d3',
    borderLeft: '1px solid #d3d3d3',
    borderBottom: '1px solid #d3d3d3',
  },
  title: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
}));

export default UseStyles;
