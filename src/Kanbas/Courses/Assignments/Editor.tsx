import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 
import * as db from '../../Database';
import './styles.css';

interface Assignment {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    points: number;
    assignTo: string;
    notAvailableUntil: string;
    description: string;
    group: string;
    submissionType: string;
}

export default function AssignmentEditor() {
    const { aid, cid } = useParams<{ aid: string; cid: string }>(); // Get the assignment ID and course ID from the URL
    const [assignment, setAssignment] = useState<Assignment | null>(null); // State to store the selected assignment
    const [submissionType, setSubmissionType] = useState<string>("offline"); // State for Submission Type
    const [availableUntil, setAvailableUntil] = useState<string>(""); // State for Available Until date

    useEffect(() => {
        // Find the assignment based on the ID
        const selectedAssignment = db.assignments.find(assignment => assignment._id === aid);
        setAssignment(selectedAssignment || null);

        if (selectedAssignment) {
            setSubmissionType(selectedAssignment.submissionType);
            setAvailableUntil(selectedAssignment.notAvailableUntil);
        }
    }, [aid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (assignment) {
            const { name, value } = e.target;
            setAssignment({
                ...assignment,
                [name]: value,
            });
        }
    };

    const handleSubmissionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSubmissionType(value);
        if (assignment) {
            setAssignment({
                ...assignment,
                submissionType: value,
            });
        }
    };

    const handleAvailableUntilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAvailableUntil(value);
    };

    const handleSave = () => {
        console.log("Saved assignment:", {
            ...assignment,
            notAvailableUntil: availableUntil,
        });
    };

    if (!assignment) {
        return <div>Loading...</div>;
    }

    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input
                id="wd-name"
                name="title"
                value={assignment.title}
                onChange={handleChange}
                style={{ display: 'block', marginBottom: '10px' }}
            />

            <textarea
                id="wd-description"
                name="description"
                value={assignment.description}
                onChange={handleChange}
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <br />

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select
                            id="wd-group"
                            name="group"
                            value={assignment.group}
                            onChange={handleChange}
                            style={{ display: 'block', marginBottom: '15px' }}
                        >
                            <option value="assignments">Assignments</option>
                            <option value="quizzes">Quizzes</option>
                            <option value="tests">Tests</option>
                            <option value="project">Project</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select
                            id="wd-submission-type"
                            value={submissionType}
                            onChange={handleSubmissionTypeChange}
                            style={{ display: 'block', marginBottom: '15px' }}
                        >
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            name="points"
                            value={assignment.points}
                            onChange={handleChange}
                            style={{ display: 'block', marginBottom: '15px' }}
                        />
                    </td>
                </tr>

                <tr>
                    <td colSpan={2}>
                        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>

                            {/* Due Date Row */}
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="wd-due-date">Due Date</label>
                                <input
                                    id="wd-due-date"
                                    type="date"
                                    name="dueDate"
                                    value={assignment.dueDate}
                                    onChange={handleChange}
                                    style={{ display: 'block' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="wd-available-until">Available Until</label>
                                <input
                                    id="wd-available-until"
                                    type="date"
                                    value={availableUntil}
                                    onChange={handleAvailableUntilChange}
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <div>
                <Link to={`/courses/${cid}/assignments`}>
                    <button>Cancel</button>
                </Link>
                <Link to={`/courses/${cid}/assignments/save`}>
                    <button className="red-button">
                        Save
                    </button>
                </Link>
            </div>
        </div>
    );
}
