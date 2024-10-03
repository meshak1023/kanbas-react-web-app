import { useState } from "react"; // Import useState for managing state
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai"; // Import down arrow icon
import ControlButtons from "./ControlButtons";

export default function Assignments() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="wd-assignments" className="assignments-box"> {}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input
                    id="wd-search-assignment"
                    className="form-control w-50"
                    placeholder="Search for Assignments"
                />
                <div>
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-secondary me-2"
                    >
                        + Group
                    </button>
                    <button
                        id="wd-add-assignment"
                        className="btn btn-danger"
                    >
                        + Assignment
                    </button>
                </div>
            </div>

            {/* Title section with 40%, plus button, and ellipsis */}
            <div className="d-flex justify-content-between align-items-center" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="d-flex align-items-center w-100 justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-1 fs-3" /> {}
                                <AiOutlineDown className={`fs-5 me-1 ${isOpen ? "rotate" : ""}`} /> {}
                                <h3 id="wd-assignments-title" className="mb-0 me-2">
                                    Assignments
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-2"> 40% of Total</p>
                                <button
                                    id="wd-add-new-assignment"
                                    className="btn btn-danger me-2"
                                >
                                    +
                                </button>
                                <IoEllipsisVertical className="fs-4" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {isOpen && ( // Only show the assignment list when dropdown is open
                <ul id="wd-assignment-list" className="list-group mt-3">
                    <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <div>
                                <a className="wd-assignment-link text-decoration-none fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1 - ENV + HTML
                                </a>
                                <p className="mb-1">Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <ControlButtons />
                    </li>

                    <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <div>
                                <a className="wd-assignment-link text-decoration-none fw-bold" href="#/Kanbas/Courses/1234/Assignments/124">
                                    A2 - CSS + BOOTSTRAP
                                </a>
                                <p className="mb-1">Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <ControlButtons />
                    </li>

                    <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <div>
                                <a className="wd-assignment-link text-decoration-none fw-bold" href="#/Kanbas/Courses/1234/Assignments/125">
                                    A3 - JAVASCRIPT + REACT
                                </a>
                                <p className="mb-1">Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <ControlButtons />
                    </li>
                </ul>
            )}
        </div>
    );
}

