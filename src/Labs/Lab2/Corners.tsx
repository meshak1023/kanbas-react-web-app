import React from 'react';
import "./index.css";

export default function Corners() {
    return (
        <>
            {/* Adding the Colors div at the beginning */}
            <div id="wd-css-borders">
                <h3>Rounded corners</h3>
                <p className="wd-rounded-corners-top wd-border-thin
                wd-border-blue wd-border-solid wd-padding-fat no-background">
                    Rounded corners on the top
                </p>
                <p className="wd-rounded-corners-bottom
                wd-border-thin wd-border-blue wd-border-solid wd-padding-fat no-background">
                    Rounded corners at the bottom
                </p>
                <p className="wd-rounded-corners-all-around
                wd-border-thin wd-border-blue wd-border-solid wd-padding-fat no-background">
                    Rounded corners all around
                </p>
                <p className="wd-rounded-corners-inline
                wd-border-thin wd-border-blue wd-border-solid wd-padding-fat no-background">
                    Different rounded corners
                </p>
            </div>
        </>
    );
}
