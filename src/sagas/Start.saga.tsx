import { fork } from 'redux-saga/effects';
import watchActions from './watchers';

export default function* startForman() {
  yield fork(watchActions);
}