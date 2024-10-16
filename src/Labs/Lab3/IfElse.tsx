import React from 'react';

const IfElse: React.FC = () => {
    let true1 = true;
    let false1 = false;

    return (
        <div id="wd-if-else">
            <h4>If Else</h4>
            {/* Render "true1" if the condition is true */}
            {true1 && <p>true1</p>}
            {/* Render "!false1" if false1 is false, otherwise render "false1" */}
            {!false1 ? <p>!false1</p> : <p>false1</p>}
            <hr />
        </div>
    );
};

export default IfElse;
