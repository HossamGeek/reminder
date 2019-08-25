import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reminders from './component/reducer';


const store = createStore(reminders);
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)