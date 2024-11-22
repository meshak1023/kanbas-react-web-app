import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client"; // Import modules client for updateModule
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    const { cid } = useParams(); // Get the course ID from the URL
    const dispatch = useDispatch();
    const [modules, setLocalModules] = useState<any[]>([]); // Manage modules locally
    const [collapsed, setCollapsed] = useState(false); // State for collapse functionality
    const [moduleName, setModuleName] = useState("");

    // Fetch modules for the course when the component loads
    const fetchModules = async () => {
        const modulesFromServer = await coursesClient.findModulesForCourse(cid as string);
        setLocalModules(modulesFromServer); // Update local state
        dispatch(setModules(modulesFromServer)); // Sync with Redux
    };

    useEffect(() => {
        fetchModules();
    }, [cid, dispatch]);

    // Create a module for the current course and add it locally and to Redux
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        setLocalModules([...modules, module]); // Update local state
        dispatch(addModule(module)); // Dispatch the created module to Redux
        setModuleName(""); // Clear the input field
    };

    // Remove a module from the server and update local and Redux states
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId); // Remove module from the server
        setLocalModules(modules.filter((m) => m._id !== moduleId)); // Update local state
        dispatch(deleteModule(moduleId)); // Dispatch deleteModule action
    };

    // Save updated module to the server and update local and Redux states
    const saveModule = async (module: any) => {
        const updatedModule = await modulesClient.updateModule(module); // Update module on the server
        setLocalModules(
            modules.map((m) =>
                m._id === updatedModule._id ? updatedModule : m
            )
        ); // Update local state
        dispatch(updateModule(updatedModule)); // Dispatch updateModule action
    };

    const editModuleHandler = (moduleId: string) => {
        setLocalModules(
            modules.map((m) =>
                m._id === moduleId ? { ...m, editing: true } : m
            )
        ); // Update local state
        dispatch(editModule(moduleId)); // Dispatch editModule action
    };

    const handleCollapseAll = () => setCollapsed(!collapsed); // Toggle collapsed state

    return (
        <div>
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={createModuleForCourse} // Use createModuleForCourse as the addModule handler
                onCollapseAll={handleCollapseAll} // Provide the onCollapseAll prop
            />

            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module: any) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            {module.editing && (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    value={module.name} // Controlled input value
                                    onChange={(e) =>
                                        setLocalModules(
                                            modules.map((m) =>
                                                m._id === module._id
                                                    ? { ...m, name: e.target.value }
                                                    : m
                                            )
                                        )
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({ ...module, editing: false });
                                        }
                                    }}
                                />
                            )}
                            <LessonControlButtons />
                            <ModuleControlButtons
                                moduleId={module._id} // Pass the module ID
                                deleteModule={removeModule} // Use removeModule event handler
                                editModule={editModuleHandler} // Pass the editModule function
                            />
                        </div>
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
