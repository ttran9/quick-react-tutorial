import React from "react";
import "./index.css";

export default function App() {

    const [counter, setCounter] = React.useState(0);
    // above is "logic rather than presentation."

    const inc = () => { setCounter(counter + 1); }

    const dec = () => { setCounter(counter - 1); }

    // below just generates presentation.
    return (
        <div className="App">
            <h1>Part 2: The State Hook</h1>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={inc}>+1</button>
                <button onClick={dec}>-1</button>
            </div>
        </div>
    )
}