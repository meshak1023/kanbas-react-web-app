import React, { useState } from 'react';

export default function AssignmentEditor() {
    const [submissionType, setSubmissionType] = useState('offline');
    const [onlineEntry, setOnlineEntry] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableTo, setAvailableTo] = useState('');

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
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
      </textarea>
            <br />

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">Assignments</option>
                            <option value="quizzes">Quizzes</option>
                            <option value="tests">Tests</option>
                            <option value="project">Project</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points System</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" value={submissionType} onChange={handleSubmissionTypeChange}>
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
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
                                <label>
                                    <input
                                        type="checkbox"
                                        id="wd-website-url"
                                        name="online-entry"
                                        value="website-url"
                                        checked={onlineEntry === 'website-url'}
                                        onChange={handleOnlineEntryChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Website URL
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox"
                                        id="wd-media-recordings"
                                        name="online-entry"
                                        value="media-recordings"
                                        checked={onlineEntry === 'media-recordings'}
                                        onChange={handleOnlineEntryChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Media Recordings
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox"
                                        id="wd-student-annotation"
                                        name="online-entry"
                                        value="student-annotation"
                                        checked={onlineEntry === 'student-annotation'}
                                        onChange={handleOnlineEntryChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    Student Annotation
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox"
                                        id="wd-file-upload"
                                        name="online-entry"
                                        value="file-upload"
                                        checked={onlineEntry === 'file-upload'}
                                        onChange={handleOnlineEntryChange}
                                        style={{ marginRight: '5px' }}
                                    />
                                    File Upload
                                </label>
                            </div>
                        </td>
                    </tr>
                )}
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={assignTo} onChange={handleAssignToChange} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <td>
                        <input
                            id="wd-due-date"
                            type="date"
                            value={dueDate}
                            onChange={handleDueDateChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input
                            id="wd-available-from"
                            type="date"
                            value={availableFrom}
                            onChange={handleAvailableFromChange}
                        />
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Available Until</label>
                    </td>
                    <td>
                        <input
                            id="wd-available-until"
                            type="date"
                            value={availableTo}
                            onChange={handleAvailableToChange}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}





