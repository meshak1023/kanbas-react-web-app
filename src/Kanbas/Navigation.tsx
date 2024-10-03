import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaUsers, FaHistory, FaLifeRing } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import "./styles.css"; // External CSS file

export default function KanbasNavigation() {
    const location = useLocation();

    // Helper to check if the link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <div
            id="wd-kanbas-navigation"
            style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            {/* NEU Link */}
            <a
                id="wd-neu-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center"
            >
                <img src="/images/Northeastern.png" width="90px" alt="Northeastern University Logo" /> {/* Increased width */}
            </a>


            {/* Account Link */}
            <Link
                to="/Kanbas/Account"
                id="wd-account-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Account") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaRegCircleUser className="small-icon text-white" /><br />
                <span className="small-text">Account</span>
            </Link>

            {/* Dashboard Link */}
            <Link
                to="/Kanbas/Dashboard"
                id="wd-dashboard-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Dashboard") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <AiOutlineDashboard className="small-icon text-danger" /><br />
                <span className="small-text">Dashboard</span>
            </Link>

            {/* Courses Link */}
            <Link
                to="/Kanbas/Courses"
                id="wd-courses-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Courses") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <LiaBookSolid className="small-icon text-danger" /><br />
                <span className="small-text">Courses</span>
            </Link>

            {/* Groups Link */}
            <Link
                to="/Kanbas/Groups"
                id="wd-groups-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Groups") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaUsers className="small-icon text-danger" /><br />
                <span className="small-text">Groups</span>
            </Link>

            {/* Calendar Link */}
            <Link
                to="/Kanbas/Calendar"
                id="wd-calendar-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Calendar") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <IoCalendarOutline className="small-icon text-danger" /><br />
                <span className="small-text">Calendar</span>
            </Link>

            {/* Inbox Link */}
            <Link
                to="/Kanbas/Inbox"
                id="wd-inbox-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Inbox") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaInbox className="small-icon text-danger" /><br />
                <span className="small-text">Inbox</span>
            </Link>

            {/* History Link */}
            <Link
                to="/Kanbas/History"
                id="wd-history-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/History") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaHistory className="small-icon text-danger" /><br />
                <span className="small-text">History</span>
            </Link>

            {/* Studio Link */}
            <Link
                to="/Kanbas/Studio"
                id="wd-studio-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Studio") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <MdOutlineVideoLibrary className="small-icon text-danger" /><br />
                <span className="small-text">Studio</span>
            </Link>

            {/* Help Link */}
            <Link
                to="/Kanbas/Help"
                id="wd-help-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Help") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaLifeRing className="small-icon text-danger" /><br />
                <span className="small-text">Help</span>
            </Link>

            {/* Labs Link */}
            <Link to="/Labs" id="wd-labs-link" className="list-group-item bg-black text-white text-center border-0">
                Labs
            </Link>
        </div>
    );
}



