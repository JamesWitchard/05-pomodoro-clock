import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div className="container">
          <h1>25 + 5 Clock</h1>
          <div className="counters">
              <Counter
                  label="Break"
              />
              <Counter
                  label="Session"
              />
          </div>

      </div>
      <p>Coded by</p>
      <a href="https://github.com/JamesWitchard">James Witchard</a>
    </div>
  );
}

export default App;
