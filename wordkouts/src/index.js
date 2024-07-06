import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ProbsSample from './sample/passing probs';
import ClassConstructor from './sample/classConstructor';
// import Keys from './sample/keys';
// import CounterFn from './sample/CounterFn';
import CounterClass from './sample/CounterClass';
import EffectSample from './sample/EffectSample';
import Child from './dataPassing/Child';
import Parent from './dataPassing/Parent';
import SimpleProps from './propsExample/simpleProps';
import PropsClass from './propsExample/propsClass';
import Toggle from './stateExample/toggle';
import CounterMultiple from './stateExample/counterMultiple';
import DynamicList from './stateExample/dynamicList';
import Timer from './timerApp/timer';
import UseHook from './refExample/useHook';
import RenderCount from './refExample/renderCount';

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
            {/* <ProbsSample details={person} /> */}
            {/* <ClassConstructor/> */}
            {/* <Keys/> */}
            {/* <CounterFn/> */}
            {/* <CounterClass/> */}
            {/* <EffectSample/> */}
            {/* <App/> */}
            {/* <Parent/> */}
            {/* <SimpleProps/>
            <PropsClass/> */}
            <Toggle/>
            <CounterMultiple/>
            <DynamicList/>
            <Timer/>
            <UseHook/>
            <RenderCount/>
    </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
