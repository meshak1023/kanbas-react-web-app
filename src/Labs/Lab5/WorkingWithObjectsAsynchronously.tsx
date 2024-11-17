import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
    const [assignment, setAssignment] = useState<any>({});

    // Fetch the assignment when the component loads
    const fetchAssignment = async () => {
        const assignmentData = await client.fetchAssignment();
        setAssignment(assignmentData);
    };

    // Update the title of the assignment
    const updateTitle = async (title: string) => {
        const updatedAssignment = await client.updateTitle(title);
        setAssignment(updatedAssignment);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div id="wd-asynchronous-objects" className="container p-3">
            <h3>Assignment</h3>

            {/* Input for editing the title */}
            <input
                value={assignment.title || ""}
                className="form-control mb-3"
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                placeholder="Edit Assignment Title"
            />

            {/* Button to update the title on the server */}
            <button
                className="btn btn-primary mb-3"
                onClick={() => updateTitle(assignment.title)}
            >
                Update Title
            </button>

            {/* Input for editing the description */}
            <textarea
                value={assignment.description || ""}
                className="form-control mb-3"
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                placeholder="Edit Assignment Description"
            />

            {/* Input for editing the due date */}
            <input
                type="date"
                className="form-control mb-3"
                value={assignment.due || ""}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            />

            {/* Toggle switch for completed status */}
            <div className="form-check form-switch mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-completed"
                    checked={assignment.completed || false}
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                />
                <label className="form-check-label ms-2" htmlFor="wd-completed">
                    Completed
                </label>
            </div>

            {/* Display the assignment object in JSON format */}
            <pre>{JSON.stringify(assignment, null, 2)}</pre>
            <hr />
        </div>
    );
}
