import React, { useState } from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons"; // Ensure this import is correct
import { addModule, editModule, updateModule, deleteModule } from "./reducer"; // Added imports
import { useSelector, useDispatch } from "react-redux"; // Added imports

export default function Modules() {
    const { cid } = useParams();  // Get the course ID from the URL
    const [modules, setModules] = useState<any[]>(db.modules);
    const [collapsed, setCollapsed] = useState(false); // State for collapse functionality
    const [moduleName, setModuleName] = useState(""); // State for new module name
    const { modules: reduxModules } = useSelector((state: any) => state.modulesReducer); // Access modules from Redux state
    const dispatch = useDispatch(); // Initialize dispatch function

    // Function to handle adding a new module
    const addModuleHandler = () => {
        if (moduleName.trim() !== "") { // Check if moduleName is not empty or whitespace
            dispatch(addModule({ name: moduleName, course: cid })); // Dispatch addModule action
            setModuleName(""); // Reset the module name
        }
    };

    // Function to delete a module by ID
    const deleteModuleHandler = (moduleId: string) => {
        dispatch(deleteModule(moduleId)); // Dispatch deleteModule action
    };

    // Function to set the module's editing state to true
    const editModuleHandler = (moduleId: string) => {
        dispatch(editModule(moduleId)); // Dispatch editModule action
    };

    // Function to update the corresponding module object in the modules array
    const updateModuleHandler = (module: any) => {
        dispatch(updateModule(module)); // Dispatch updateModule action
    };

    // Toggle collapsed state when "Collapse All" is clicked
    const handleCollapseAll = () => setCollapsed(!collapsed);

    return (
        <div>
            <ModulesControls
                onCollapseAll={handleCollapseAll} // Pass the collapse function
                moduleName={moduleName} // Pass the current module name
                setModuleName={setModuleName} // Pass the function to set the module name
                addModule={addModuleHandler} // Pass the function to add a new module
            />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {reduxModules
                    .filter((module: any) => module.course === cid) // Filter modules based on course ID
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) => updateModuleHandler({ ...module, name: e.target.value })} // Update module name
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateModuleHandler({ ...module, editing: false }); // Finish editing on Enter
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}
                                {/* Pass deleteModule and editModule to ModuleControlButtons */}
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={deleteModuleHandler}
                                    editModule={editModuleHandler} // Pass the editModule function
                                />
                            </div>
                            {/* Conditionally render the lessons list based on the collapsed state */}
                            {!collapsed && module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any, index: number) => (
                                        <li key={index} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
