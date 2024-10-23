import React, { useState } from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons"; // Ensure you import the ModuleControlButtons component

export default function Modules() {
    const { cid } = useParams();  // Get the course ID from the URL
    const [modules, setModules] = useState<any[]>(db.modules);
    const [collapsed, setCollapsed] = useState(false); // State for collapse functionality
    const [moduleName, setModuleName] = useState("");

    const addModule = () => {
        setModules([...modules, { _id: new Date().getTime().toString(), name: moduleName, course: cid, lessons: [] }]);
        setModuleName("");
    };

    const deleteModule = (moduleId: string) => {
        setModules(modules.filter((m) => m._id !== moduleId));
    };

    const editModule = (moduleId: string) => {
        setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    };

    const updateModule = (module: any) => {
        setModules(modules.map((m) => (m._id === module._id ? module : m)));
    };

    // Toggle collapsed state when "Collapse All" is clicked
    const handleCollapseAll = () => setCollapsed(!collapsed);

    return (
        <div>
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={addModule}
                onCollapseAll={handleCollapseAll} // Provide the onCollapseAll prop
            />

            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid) // Filter modules based on course ID
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) => updateModule({ ...module, name: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}
                                <LessonControlButtons />
                                <ModuleControlButtons
                                    moduleId={module._id} // Pass the module ID
                                    deleteModule={deleteModule} // Pass the deleteModule function
                                    editModule={editModule} // Pass the editModule function
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
