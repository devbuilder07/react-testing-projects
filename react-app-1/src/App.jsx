import './App.css';
import C1 from './components/class-component';
import User from './components/users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react js</h1>
        <h6>This is a functional component</h6>
        <C1 />
        <User />
      </header>
    </div>
  );
}

export default App;
