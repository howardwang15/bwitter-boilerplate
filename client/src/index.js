import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './containers/main';
import Auth from './containers/auth';
import rootReducer from './reducers';


// TODO: add provider wrapper
const root = (
    <Main />
);

ReactDOM.render(root, document.getElementById('root'));
