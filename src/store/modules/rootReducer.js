import { combineReducers } from 'redux';

import login from './login/reducer';
import medicalReport from './medical_report/reducer';
import common from './common/reducer';

export default combineReducers({
  login,
  medicalReport,
  common,
});
