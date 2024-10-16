import React from 'react';

export default function Spreading() {
    // Array spreading
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5, 6];

    // Object spreading
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
    const obj3 = { ...obj1, b: 4 }; // Overriding the value of 'b'

    return (
        <div id="wd-spreading">
            <h2>Spread Operator</h2>

            <h3>Array Spread</h3>
            {/* Display the original and spread arrays */}
            arr1 = { JSON.stringify(arr1) }  <br />
            arr2 = { JSON.stringify(arr2) }  <br />

            <h3>Object Spread</h3>
            {/* Display the original and spread objects */}
            obj1 = { JSON.stringify(obj1) }  <br />
            obj2 = { JSON.stringify(obj2) }  <br />
            obj3 = { JSON.stringify(obj3) }  <br />

            <hr />
        </div>
    );
}
