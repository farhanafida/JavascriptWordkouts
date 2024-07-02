import logo from './logo.svg';
import './App.css';
import Display from './AssignmentWorkout/display';
import { Form, Routes } from 'react-router-dom';
import NavigateHook from './sampleProblems/navigateHook';

import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';


function App() {
  return (
  <Router>
    <div>
    <nav>
      <NavigateHook/>
      <Routes>
      <Route path='/About'element={<Display name='ashkar' email='moash@123gmai.com' />}/>
      <Route path='/Home' element={<Form/> }/>
      
      
      </Routes>
    </nav>
    </div>
  </Router>
  );
}

export default App;
