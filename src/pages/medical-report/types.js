import { types, async } from 'utils/type-creator';

export default types([
  ...async('GET_PATIENT'),
  ...async('GET_REPORT'),
  ...async('DOWNLOAD_PDF'),
  ...async('GET_REPORTS'),
], 'MEDICAL_REPORT');
