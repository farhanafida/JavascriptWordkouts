import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './ctop/parent';
import SyntheticEvent from './ctop/syntheticEvent';
import UseCount from './hook/useCount';
import ClassComponent from './sample/classComponent';
import FunctionLifecycle from './sample/functionLifecycle';
import ListOfValues from './sample/listOfValues';

const name=['ashkar','ayisha','shameem',1]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Parent/>
  <SyntheticEvent/>
  <UseCount/>
  <React.StrictMode>
      <ClassComponent/>
      <FunctionLifecycle/>
    </React.StrictMode>
    <ListOfValues names={name}/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
