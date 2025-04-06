import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h4>Contador: {state.count}</h4>
      <div className="d-flex gap-3 mt-3">
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
