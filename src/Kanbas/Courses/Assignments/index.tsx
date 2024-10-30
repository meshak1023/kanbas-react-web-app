import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical, IoTrash } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import ControlButtons from "./ControlButtons";
import { deleteAssignment } from "./reducer";
import { Assignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    console.log("Assignments Component - Course ID:", cid); // Debug to verify `cid`

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    const assignmentsForCourse = assignments.filter((assignment: Assignment) => assignment.course === cid);

    const handleDelete = (assignmentId: string) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (isConfirmed) {
            dispatch(deleteAssignment(assignmentId));
        }
    };

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
                    <Link to={`/Kanbas/Courses/${cid}/assignments/newAssignmentEditor`}>
                        <button id="wd-add-assignment" className="btn btn-danger">
                            + Assignment
                        </button>
                    </Link>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="d-flex align-items-center w-100 justify-content-between">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-1 fs-3" />
                                <AiOutlineDown className={`fs-5 me-1 ${isOpen ? "rotate" : ""}`} />
                                <h3 id="wd-assignments-title" className="mb-0 me-2">Assignments</h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-2">40% of Total</p>
                                <button id="wd-add-new-assignment" className="btn btn-danger me-2">+</button>
                                <IoEllipsisVertical className="fs-4" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <ul id="wd-assignment-list" className="list-group mt-3">
                    {assignmentsForCourse.map((assignment: Assignment) => (
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
                                    <p className="mb-1">Not Available Until: {assignment.notAvailableUntil}</p>
                                    <p className="mb-1">Due: {assignment.dueDate} | Points: {assignment.points}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <ControlButtons />
                                <IoTrash
                                    className="fs-4 text-danger ms-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleDelete(assignment._id)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
