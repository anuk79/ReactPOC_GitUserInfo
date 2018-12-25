//react imports
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//reducer
import rootReducer from './reducers/rootReducer';
//sagas
// import getRepoSaga from './sagas/getRepoSaga';
// import getUserDetailsSaga from './sagas/getUserDetailsSaga';
// import searchRepoSaga from './sagas/searchRepoSaga';
// import getContributorDetailsSaga from './sagas/getContributorDetailsSaga';
import rootSaga from './sagas/rootSaga';
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
}

export default configureStore;