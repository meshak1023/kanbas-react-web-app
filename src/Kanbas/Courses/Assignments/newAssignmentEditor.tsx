import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAssignment } from './reducer';

export default function NewAssignmentEditor() {
    const { cid } = useParams();
    console.log("NewAssignmentEditor Component - Course ID:", cid); // Debug line

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFrom, setAvailableFrom] = useState('');
    const [availableUntil, setAvailableUntil] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            course: cid,  // Properly set the course to this assignment
            assignTo: '',           // Provide default or user-input value
            group: '',              // Provide default or user-input value
            submissionType: '',     // Provide default or user-input value
        }));

        // Navigate back to the assignments list for the given course
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        // Navigate back to the assignments list for the given course
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div>
            <h1>Add/Edit Assignment</h1>
            <input type="text" placeholder="Assignment Name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Points" value={points} onChange={(e) => setPoints(e.target.value)} />
            <input type="date" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <input type="date" placeholder="Available From" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
            <input type="date" placeholder="Available Until" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}
