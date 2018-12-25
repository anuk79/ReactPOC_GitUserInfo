//react-redux-saga imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//styles
import './index.scss';
//Application
import App from './App';
//reducer
import rootReducer from './reducers/rootReducer';
// //sagas
import getRepoSaga from './sagas/getRepoSaga';
import getUserDetailsSaga from './sagas/getUserDetailsSaga';
import searchRepoSaga from './sagas/searchRepoSaga';
import getContributorDetailsSaga from './sagas/getContributorDetailsSaga';
// import configureStore from './store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// const store = configureStore();

sagaMiddleware.run(getRepoSaga);
sagaMiddleware.run(getUserDetailsSaga);
sagaMiddleware.run(searchRepoSaga);
sagaMiddleware.run(getContributorDetailsSaga);

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();