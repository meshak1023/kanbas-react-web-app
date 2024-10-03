import React from 'react';
import "./index.css";

export default function Borders() {
    return (
        <>
            {/* Adding the Colors div at the beginning */}
            <div id="wd-css-borders">
                <h2>Borders</h2>
                <p className="wd-border-fat wd-border-red wd-border-solid no-background">
                    Solid fat red border
                </p>
                <p className="wd-border-thin wd-border-blue wd-border-dashed no-background">
                    Dashed thin blue border
                </p>
            </div>
        </>
    );
}
