import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Container from "./Container";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';  //we exported combineReducers

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <div>
                <Header />
                <Container />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);



