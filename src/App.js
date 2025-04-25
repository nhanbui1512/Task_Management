import "./App.css";
import Home from "./Pages/Home";
import Storage from "./Context/TaskContext";

function App() {
  return (
    <div className="App">
      <Storage>
        <Home />
      </Storage>
    </div>
  );
}

export default App;
