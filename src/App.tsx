import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import AssignmentEditor from "./Kanbas/Courses/Assignments/newAssignmentEditor"; // Import the AssignmentEditor component
import store from "./Kanbas/store"
export default function App() {
    return (
        <Provider store={store}>
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                    <Route path="/Kanbas/Courses/:cid/assignments/newAssignmentEditor" element={<AssignmentEditor />} />
                </Routes>
            </div>
        </HashRouter>
        </Provider>

    );
}