import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation(); // Destructure pathname from useLocation

    return (
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a1"
                    href="#/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`} // Highlight Lab 1 if pathname includes "Lab1"
                >
                    Lab 1
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a2"
                    href="#/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`} // Highlight Lab 2 if pathname includes "Lab2"
                >
                    Lab 2
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a3"
                    href="#/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`} // Highlight Lab 3 if pathname includes "Lab3"
                >
                    Lab 3
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a4"
                    href="#/Labs/Lab4"
                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`} // Highlight Lab 4 if pathname includes "Lab4"
                >
                    Lab 4
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a5"
                    href="#/Labs/Lab5"
                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`} // Highlight Lab 4 if pathname includes "Lab4"
                >
                    Lab 5
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-github"
                    href="https://github.com/meshak1023/kanbas-react-web-app.git" // Your GitHub link
                    target="_blank"
                    className="nav-link"
                >
                    My GitHub
                </a>
            </li>
        </ul>
    );
}