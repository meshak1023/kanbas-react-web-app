import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import { FaInbox, FaUsers, FaHistory, FaLifeRing } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import "./styles.css"; // External CSS file

export default function KanbasNavigation() {
    const location = useLocation();

    // Helper to check if the link is active
    const isActive = (path: string) => location.pathname === path;

    // Array of links data
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
        { label: "Groups", path: "/Kanbas/Groups", icon: FaUsers },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "History", path: "/Kanbas/History", icon: FaHistory },
        { label: "Studio", path: "/Kanbas/Studio", icon: MdOutlineVideoLibrary },
        { label: "Help", path: "/Kanbas/Help", icon: FaLifeRing },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },

    ];

    return (
        <div
            id="wd-kanbas-navigation"
            style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            <a
                id="wd-neu-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center"
            >
                <img src="/images/Northeastern.png" width="90px" alt="Northeastern University Logo" /> {/* Increased width */}
            </a>

            <Link
                to="/Kanbas/Account"
                id="wd-account-link"
                className={`list-group-item text-center border-0 ${
                    isActive("/Kanbas/Account") ? "bg-white text-danger active" : "bg-black text-white"
                }`}
            >
                <FaRegCircleUser className="small-icon text-white" />
                <br />
                <span className="small-text">Account</span>
            </Link>

            {links.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    id={`wd-${link.label.toLowerCase()}-link`}
                    className={`list-group-item text-center border-0 ${
                        isActive(link.path) ? "bg-white text-danger active" : "bg-black text-white"
                    }`}
                >
                    <link.icon className="small-icon text-danger" />
                    <br />
                    <span className="small-text">{link.label}</span>
                </Link>
            ))}
        </div>
    );
}



