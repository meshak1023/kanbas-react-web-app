import React, { useState } from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const { cid } = useParams();  // Get the course ID from the URL
    const modules = db.modules;    // Get the modules from the database
    const [collapsed, setCollapsed] = useState(false); // State for collapse functionality

    // Toggle collapsed state when "Collapse All" is clicked
    const handleCollapseAll = () => setCollapsed(!collapsed);

    return (
        <div>
            <ModulesControls onCollapseAll={handleCollapseAll} />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid) // Filter modules based on course ID
                    .map((module: any) => (
                        <li key={module.name} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name}
                                <LessonControlButtons />
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
