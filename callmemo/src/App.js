
import './App.css';
import {BrowserRouter as Router,Route,Routes, Link, NavLink} from 'react-router-dom'
import UseReducer from './ReducerHook/useReducer';
import Usecallback from './callback/Usecallback';


function App() {
  return (
    <div className="App">

      <Router>

        <Link to='/useReducer'>Reducer</Link>
        <NavLink to='/useCallback'activeClassName="active">Callback</NavLink>

        <Routes>
        <Route path='/useReducer' element={<UseReducer />}/>
        <Route path='/useCallback' element={<Usecallback/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
