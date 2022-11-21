import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const [input, setInput] = useState(0);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  const addBy = () => {
    dispatch({ type: "ADD-BY", payload: input });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
      <input
        type="number"
        onChange={(e) => setInput(e.target.valueAsNumber)}
        placeholder="Enter a number"
      />
    </div>
  );
}

export default App;
