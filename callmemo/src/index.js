import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Usecallback from './callback/Usecallback';
import UseMemo from './callback/UseMemo';
import ContextProblem from './UseContext/ContextProblem';
import UseReducer from './ReducerHook/useReducer';
import UseReducerObject from './ReducerHook/UseReducerObject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Usecallback/>

    <UseMemo/>

    <ContextProblem/>

    <UseReducer/>

    <UseReducerObject/>

    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
