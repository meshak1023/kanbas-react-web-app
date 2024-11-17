import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    // State to hold the assignment object with default values
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    // New state for module object with default values
    const [module, setModule] = useState({
        id: "101",
        name: "Intro to Node.js",
        description: "Learn the basics of Node.js and Express.",
        course: "Web Development",
    });

    // API URLs for assignment and module
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Existing functionality to retrieve assignment and title */}
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}`}>
                Get Assignment
            </a>
            <hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/title`}>
                Get Title
            </a>
            <hr />

            {/* Existing functionality to modify assignment title */}
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
                Update Title
            </a>
            <input
                className="form-control w-75"
                id="wd-assignment-title"
                defaultValue={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                placeholder="Edit Assignment Title"
            />
            <hr />

            {/* New functionality for retrieving and modifying the module */}
            <h4>Module Operations</h4>
            <a id="wd-retrieve-module" className="btn btn-primary" href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-primary ms-2" href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <hr />

            <h4>Modify Module Properties</h4>
            <a id="wd-update-module-name" className="btn btn-primary float-end" href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
                Update Module Name
            </a>
            <input
                className="form-control w-75 mb-2"
                id="wd-module-name"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
                placeholder="Edit Module Name"
            />
            <a id="wd-update-module-description" className="btn btn-primary float-end" href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
                Update Module Description
            </a>
            <input
                className="form-control w-75 mb-2"
                id="wd-module-description"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
                placeholder="Edit Module Description"
            />
            <hr />

            {/* New inputs to modify assignment score and completed status */}
            <h4>Modify Assignment Score and Completed Status</h4>
            <a id="wd-update-assignment-score" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input
                className="form-control w-75 mb-2"
                id="wd-assignment-score"
                type="number"
                value={assignment.score}
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
                placeholder="Edit Assignment Score"
            />
            <a id="wd-update-assignment-completed" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed Status
            </a>
            <input
                className="form-check-input"
                id="wd-assignment-completed"
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />
            <label htmlFor="wd-assignment-completed" className="form-check-label ms-2">
                Completed
            </label>
            <hr />
        </div>
    );
}
