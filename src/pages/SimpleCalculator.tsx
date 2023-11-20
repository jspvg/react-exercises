/* TASK
Build a simple calculator
useReducer - moving state management outside of the component
Requirements:
- Implement the logic so that two numbers can be selected
- Implement the logic to add these two selected numbers together. Same for subtraction
- Implement a clear function which will reset botch the numbers to 0
- use UseReducer to store and modify your data
*/

import { useReducer } from "react";

interface State {
  num1: number;
  num2: number;
  res: number;
}

type Action =
  | { type: "set_num1"; payload: number }
  | { type: "set_num2"; payload: number }
  | { type: "add" }
  | { type: "subtract" }
  | { type: "clear" };

const initialState: State = {
  num1: 0,
  num2: 0,
  res: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set_num1":
      return { ...state, num1: action.payload };
    case "set_num2":
      return { ...state, num2: action.payload };
    case "add":
      return { ...state, res: state.num1 + state.num2 };
    case "subtract":
      return { ...state, res: state.num1 - state.num2 };
    case "clear":
      return { ...initialState };
    default:
      return state;
  }
};

const SimpleCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleNumClick = (number: number, inputType: "num1" | "num2") => {
    if (inputType === "num1") {
      dispatch({ type: "set_num1", payload: state.num1 * 10 + number });
    } else {
      dispatch({ type: "set_num2", payload: state.num2 * 10 + number });
    }
  };

  return (
    <div>
      <div>
        <h2>{state.num1}</h2>
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumClick(number, "num1")}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>{state.num2}</h2>
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumClick(number, "num2")}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "add" })}>+</button>
        <button onClick={() => dispatch({ type: "subtract" })}>-</button>
        <button onClick={() => dispatch({ type: "clear" })}>c</button>
      </div>
      <div>
        <h2>Result: {state.res}</h2>
      </div>
    </div>
  );
};

export default SimpleCalculator;
