import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];
    const { cid } = useParams();
    const location = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                const path = `/Kanbas/Courses/${cid}/${link}`;
                const isActive = location.pathname === path;

                return (
                    <Link
                        key={link}
                        to={path}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
