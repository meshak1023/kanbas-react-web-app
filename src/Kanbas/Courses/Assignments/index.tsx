import { useState } from "react"; // Import useState for managing state
import { useParams } from "react-router"; // Import useParams for getting URL parameters
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai"; // Import down arrow icon
import ControlButtons from "./ControlButtons";
import * as db from '../../Database'; // Import database

export default function Assignments() {
    const { cid } = useParams(); // Get the course ID from the URL
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Filter assignments based on the course ID
    const assignmentsForCourse = db.assignments.filter(
        (assignment) => assignment.course === cid
    );

    return (
        <div id="wd-assignments" className="assignments-box">
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

            {/* Title section with dropdown functionality */}
            <div className="d-flex justify-content-between align-items-center" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="d-flex align-items-center w-100 justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-1 fs-3" />
                                <AiOutlineDown className={`fs-5 me-1 ${isOpen ? "rotate" : ""}`} />
                                <h3 id="wd-assignments-title" className="mb-0 me-2">
                                    Assignments
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-2">40% of Total</p>
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
                    {assignmentsForCourse.map((assignment) => (
                        <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    <a
                                        className="wd-assignment-link text-decoration-none fw-bold"
                                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    >
                                        {assignment.title}
                                    </a>
                                    <p className="mb-1">Due Date Information Here | Points Information Here</p>
                                </div>
                            </div>
                            <ControlButtons />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
