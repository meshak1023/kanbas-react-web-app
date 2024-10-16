import React from 'react';

const ImpliedReturn: React.FC = () => {
    const multiply = (a: number, b: number) => a * b;

    const fourTimesFive = multiply(4, 5);
    return (
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            {/* Display the result of fourTimesFive and multiply(4, 5) */}
            fourTimesFive = {fourTimesFive}
            <br />
            multiply(4, 5) = {multiply(4, 5)}
            <hr />
        </div>
    );
};

export default ImpliedReturn;
