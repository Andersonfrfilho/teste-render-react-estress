import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import MedicalReport from './pages/Medical_Report';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MedicalReport} />
      {/* <Route path="/Home/:index" exact component={MedicalReport} /> */}
    </Switch>
  );
}
