import { useParams, Navigate, Route, Routes, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/table";
import { courses } from "../Database";  // Import courses from your database

export default function Courses() {
    const { cid } = useParams();

    const course = courses.find((course) => course._id === cid);

    const { pathname } = useLocation();

    const section = pathname.split("/")[4];  // This will get 'Home', 'Modules', etc.

    return (
        <>
            <div id="wd-courses">
                <h2 className="text-danger">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course ? course.name : "Course Not Found"}
                    {section && ` > ${section}`}
                </h2>
                <hr />
                <div className="d-flex">
                    <div className="d-none d-md-block">
                        <CoursesNavigation />
                    </div>
                    <div className="flex-fill">
                        <Routes>
                            <Route path="Home" element={<Home />} />
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}
