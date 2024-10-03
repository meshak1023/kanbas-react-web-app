import React, { useState } from 'react';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const [collapsed, setCollapsed] = useState(false);

    // Toggle collapsed state when "Collapse All" is clicked
    const handleCollapseAll = () => setCollapsed(!collapsed);

    return (
        <div>
            {/* Pass the handleCollapseAll function to ModulesControls */}
            <ModulesControls onCollapseAll={handleCollapseAll} />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {/* Module 1 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <LessonControlButtons />
                    </div>
                    {/* Conditionally render the lessons list based on the collapsed state */}
                    {!collapsed && (
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LEARNING OBJECTIVES
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to the course
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">Learn what is Web Development</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 1</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 2</li>
                        </ul>
                    )}
                </li>

                {/* Module 2 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        Week 2
                    </div>
                    {/* Conditionally render the lessons list based on the collapsed state */}
                    {!collapsed && (
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 1</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 2</li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
