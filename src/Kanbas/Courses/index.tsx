import { useParams, Navigate, Route, Routes, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import NewAssignmentEditor from "./Assignments/newAssignmentEditor";

import PeopleTable from "./People/table";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();

    // Find the course by its ID from the courses prop
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
                            <Route path="Assignments/:aid" element={<NewAssignmentEditor />} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}
