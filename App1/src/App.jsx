import './App.css';
function App() {
  function Click() {
    alert("Hello World!!!!");
  }
  return (
    <div className="App">
      <button className="Hello" onClick={Click}>
        Hello!!! Click Me!!!!
      </button>
    </div>
  );
}

export default App;
