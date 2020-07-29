import { all } from 'redux-saga/effects';

import login from './login/sagas';
import medicalReport from './medical_report/sagas';

export default function* rootSaga() {
  return yield all([login, medicalReport]);
}
