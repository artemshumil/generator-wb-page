import { takeLatest, delay } from 'redux-saga/effects';
import { <%= state_CamelCase %>StateActions } from '../../slice';

export function* worker() {
  try {
    yield delay(1000);
  } catch (error) {
    console.error(error);
  }
}

export function* watcher() {
  yield takeLatest(<%= state_CamelCase %>StateActions.<%= saga_CamelCase %>ActionSaga, worker);
}
