import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { Route, Switch, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import Box from '@material-ui/core/Box';
import ShieldRoute from 'router/containers/ShieldRoute';

import injectReducer from 'utils/injectReducer';
import get from 'utils/get';
import reducer from 'medical-report/reducers';
import { ReportContainer } from 'medical-report/containers';

class MedicalReport extends Component {
  render() {
    return (
      <Box style={{ display: 'flex' }}>
        <Helmet>
          <title>Relatório Médico</title>
        </Helmet>
        <Switch location={this.props.location}>
          <ShieldRoute
            permissions={['MEDICAL_REPORT']}
            exact
            path="/medical-report/:id"
            component={ReportContainer}
          />
        </Switch>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  location: get(state, 'route.location'),
});

const mapActionToProps = {
  push,
};

const withConnect = connect(
  mapStateToProps,
  mapActionToProps,
);

const withReducer = injectReducer({ key: 'medicalReport', reducer });

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(MedicalReport);
