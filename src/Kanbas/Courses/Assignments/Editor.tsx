import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css'; // Import your CSS file here

export default function AssignmentEditor() {
    const { courseId, assignmentId } = useParams(); // Get courseId and assignmentId from URL
    const [submissionType, setSubmissionType] = useState('offline');
    const [onlineEntry, setOnlineEntry] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableTo, setAvailableTo] = useState('');
    const [assignment, setAssignment] = useState<any>(null); // Replace `any` with your actual assignment type

    // Fetch assignment data from the database or API
    useEffect(() => {
        const fetchAssignment = async () => {
            const response = await fetch(`/api/assignments/${assignmentId}`);
            const data = await response.json();
            setAssignment(data);
            if (data) {
                setAssignTo(data.title);
                setDueDate(data.dueDate);
                setAvailableFrom(data.availableFrom);
                setAvailableTo(data.availableTo);
                setSubmissionType(data.submissionType);
            }
        };
        fetchAssignment();
    }, [assignmentId]);

    // Event handlers with explicit types
    const handleSubmissionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSubmissionType(event.target.value);
    };

    const handleOnlineEntryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOnlineEntry(event.target.value);
    };

    const handleAssignToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAssignTo(event.target.value);
    };

    const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(event.target.value);
    };

    const handleAvailableFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAvailableFrom(event.target.value);
    };

    const handleAvailableToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAvailableTo(event.target.value);
    };

    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value={assignTo} onChange={handleAssignToChange} style={{ display: 'block', marginBottom: '10px' }} />

            <textarea id="wd-description" value={assignment ? assignment.description : ''} readOnly />
            <br />

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={assignment ? assignment.points : ''} readOnly />
                    </td>
                </tr>
                {submissionType === 'online' && (
                    <tr>
                        <td colSpan={2}>
                            <div>
                                <h3>Online Entry Options</h3>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="wd-text-entry"
                                        name="online-entry"
                                        value="text-entry"
                                        checked={onlineEntry === 'text-entry'}
                                        onChange={handleOnlineEntryChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Text Entry
                                </label>
                                <br />
                                {/* Other online entry options... */}
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* Assign Label Outside the Box */}
            <label htmlFor="wd-assign-to" style={{ display: 'block', marginTop: '20px', marginBottom: '10px' }}>Assign</label>

            {/* Container for Assign To, Due Date, Available From, Available Until */}
            <div style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '15px',
                marginTop: '0', // No top margin here, adjust as needed
                backgroundColor: '#f9f9f9',
            }}>
                <div>
                    <table>
                        <tbody>
                        <div>
                            <label htmlFor="wd-assign-to" style={{ display: 'block', marginBottom: '5px' }}>Assign To</label>
                            <input id="wd-assign-to" value={assignTo} onChange={handleAssignToChange} style={{ display: 'block', marginBottom: '15px' }} />
                        </div>
                        <div>
                            <label htmlFor="wd-due-date">Due Date</label>
                            <input
                                id="wd-due-date"
                                type="date"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                style={{ display: 'block', marginBottom: '15px' }}
                            />
                        </div>
                        {/* Align Available From and Available Until more to the left */}
                        <div>
                            <label htmlFor="wd-available-from" style={{ display: 'block', marginBottom: '5px' }}>Available From</label>
                            <input
                                id="wd-available-from"
                                type="date"
                                value={availableFrom}
                                onChange={handleAvailableFromChange}
                                style={{ display: 'block', marginBottom: '15px' }} // Added margin for spacing
                            />
                        </div>
                        <div>
                            <label htmlFor="wd-available-until" style={{ display: 'block', marginBottom: '5px' }}>Available Until</label>
                            <input
                                id="wd-available-until"
                                type="date"
                                value={availableTo}
                                onChange={handleAvailableToChange}
                                style={{ display: 'block', marginBottom: '15px' }} // Added margin for spacing
                            />
                        </div>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Navigation buttons */}
            <div>
                <Link to={`/courses/${courseId}/assignments`}>
                    <button>Cancel</button>
                </Link>
                <Link to={`/courses/${courseId}/assignments/save`}>
                    <button className="red-button">
                        Save
                    </button>
                </Link>
            </div>
        </div>
    );
}
