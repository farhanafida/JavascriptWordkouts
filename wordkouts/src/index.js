import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProbsSample from './sample/passing probs';

const person={
    name:'ashkar',
    age:23,
    place:'purakkad',
    job:'software developer'
}
const user=true
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
            <ProbsSample details={person} />
    </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
