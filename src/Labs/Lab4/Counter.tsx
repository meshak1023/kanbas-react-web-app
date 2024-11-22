import React, { useState } from "react";
import "./Counter.css";  // We'll add CSS for styling here

export default function Counter() {
    const [count, setCount] = useState(7);  // Default count to 7
    console.log(count);

    return (
        <div className="counter-container">
            <h2>Counter: {count}</h2>
            <div className="button-group">
                <button
                    className="btn btn-up"
                    onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click"
                >
                    Up
                </button>
                <button
                    className="btn btn-down"
                    onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click"
                >
                    Down
                </button>
            </div>
            <hr />
        </div>
    );
}