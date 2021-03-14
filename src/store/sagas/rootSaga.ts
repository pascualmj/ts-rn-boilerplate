import {all} from 'redux-saga/effects'

import welcomeSaga from './welcome/welcome'

export default function* rootSaga(): Generator {
  yield all([welcomeSaga()])
}
