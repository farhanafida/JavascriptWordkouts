
import './App.css';
import FnComp from './error/fnComp';
import ErrorBoundary from './error/boundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary><FnComp name='shameem'/></ErrorBoundary>
      <ErrorBoundary><FnComp name='ashkar'/></ErrorBoundary>
      
    </div>
  );
}

export default App;
