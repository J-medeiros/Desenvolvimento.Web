import { useReducer } from "react";

const initialState = { count: 1 };

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
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    );
};

export default UseReducerExample;
