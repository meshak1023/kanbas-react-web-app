import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Assignment {
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

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // Populate assignments dynamically from server data
        setAssignments: (state, { payload }: PayloadAction<Assignment[]>) => {
            state.assignments = payload;
        },
        // Add a new assignment
        addAssignment: (state, { payload }) => {
            const newAssignment: Assignment = {
                _id: new Date().getTime().toString(),
                title: payload.title,
                course: payload.course,
                dueDate: payload.dueDate,
                points: payload.points,
                assignTo: payload.assignTo,
                notAvailableUntil: payload.notAvailableUntil,
                description: payload.description,
                group: payload.group,
                submissionType: payload.submissionType,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        // Delete an assignment by its ID
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
        },
        // Update an existing assignment
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === payload._id ? payload : assignment
            );
        },
    },
});

// Export actions and reducer
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;
