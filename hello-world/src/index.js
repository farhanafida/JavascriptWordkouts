import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListVal from './comp/listFn';
import Label from './comp/classComp';
import Message from './comp/changeState';
import Counter from './comp/counterApp';
import CounterHook from './comp/useStateHook';
import UseStateHookSample from './comp/useStateHook2';
import FunctionalComponent from './sampleProblems/functional';
import ClassComp from './sampleProblems/classComp';
import Form from './AssignmentWorkout/form';

const name1=['ashkar','shameem','ajnas','rahel']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      {/* <FunctionalComponent name={name1} /> */}
      {/* <ListVal name='ashkar' surname='madathil' > <span> This is an example of child props</span> </ListVal>
      <ListVal name='ajnas' surname='tadathil' />
      <ListVal name='shameem' surname='kulathil' />
      <ListVal name='sabith' surname='padannayil' />
      <Label name='ashkar' surname='madathil' /> */}
      {/* <Message/> */}
      {/* <Counter />
      <section >
        <h1></h1>
      </section>

      <CounterHook /> */}
      {/* <UseStateHookSample /> */}

      {/* <ClassComp/> */}

      {/* <Counter/>
      <App/> */}

      <Form/>
      
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
