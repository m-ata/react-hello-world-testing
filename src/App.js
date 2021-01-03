import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.label}
      </header>
    </div>
  );
}

export default App;
