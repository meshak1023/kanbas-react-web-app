import { createSlice } from "@reduxjs/toolkit";

// Initial state with an empty modules array
const initialState = {
    modules: [], // Initialize modules as an empty array
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        // Populate modules dynamically from server data
        setModules: (state, { payload }) => {
            state.modules = payload;
        },
        // Add a new module to the modules array
        addModule: (state, { payload: module }) => {
            const newModule: any = {
                _id: new Date().getTime().toString(), // Generate unique ID
                lessons: [],
                name: module.name,
                course: module.course,
            };
            state.modules = [...state.modules, newModule] as any;
        },
        // Remove a module by its ID
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter((m: any) => m._id !== moduleId);
        },
        // Update an existing module's details
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        // Mark a module as being edited
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});

// Export actions and reducer
export const { addModule, deleteModule, updateModule, editModule, setModules } =
    modulesSlice.actions;
export default modulesSlice.reducer;
