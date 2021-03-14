import {call, put, takeLatest} from 'redux-saga/effects'
import {
  fetchTitleStart,
  fetchTitleSuccess,
  fetchTitleFailure,
  fetchWelcome as fetchWelcomeAction
} from '../../slices/welcome/welcome'
import {fetchWelcome} from '../../api/welcome'

function* fetchWelcomeWorker() {
  try {
    yield put(fetchTitleStart())
    const {data} = yield call(fetchWelcome)
    yield put(fetchTitleSuccess(data.result.title))
  } catch (err) {
    yield put(fetchTitleFailure())
  }
}

export default function* welcomeSaga(): Generator {
  yield takeLatest(fetchWelcomeAction, fetchWelcomeWorker)
}
