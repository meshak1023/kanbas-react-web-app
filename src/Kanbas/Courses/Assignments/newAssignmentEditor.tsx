import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAssignment } from './reducer';
import './styles.css';

export default function NewAssignmentEditor() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableUntil, setAvailableUntil] = useState('');
    const [group, setGroup] = useState('assignments');
    const [submissionType, setSubmissionType] = useState('offline');

    const handleSave = () => {
        if (!cid) {
            console.error("Course ID is missing");
            return;
        }

        dispatch(addAssignment({
            title: name,
            description,
            points: Number(points),
            dueDate,
            notAvailableUntil: availableFrom,
            availableUntil,
            course: cid,
            assignTo: '',
            group,
            submissionType,
        }));

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <h1>Add/Edit Assignment</h1>

            <label htmlFor="wd-name">Assignment Name</label>
            <input
                id="wd-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />

            <textarea
                id="wd-description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select
                            id="wd-group"
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
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
                            onChange={(e) => setSubmissionType(e.target.value)}
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
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                            style={{ display: 'block', marginBottom: '15px' }}
                        />
                    </td>
                </tr>

                <tr>
                    <td colSpan={2}>
                        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="wd-due-date">Due Date</label>
                                <input
                                    id="wd-due-date"
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    style={{ display: 'block' }}
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="wd-available-from">Available From</label>
                                <input
                                    id="wd-available-from"
                                    type="date"
                                    value={availableFrom}
                                    onChange={(e) => setAvailableFrom(e.target.value)}
                                    style={{ display: 'block' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="wd-available-until">Available Until</label>
                                <input
                                    id="wd-available-until"
                                    type="date"
                                    value={availableUntil}
                                    onChange={(e) => setAvailableUntil(e.target.value)}
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave} className="red-button">Save</button>
            </div>
        </div>
    );
}
