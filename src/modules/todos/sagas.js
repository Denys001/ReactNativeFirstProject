import selectors from './selectors';

function* saga({ params, callback }) {
    const list = yield select(selectors.getLoading);

    yield put({ type: 'TODOS/LIST/REDUCE', payload: { list } })
}

export default function* () {
    yield all([
        takeEvery('TODOS/ITEM/ADD', add)
    ]);
}