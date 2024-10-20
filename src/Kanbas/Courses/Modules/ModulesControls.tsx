import React, { Dispatch, SetStateAction } from "react";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

// Define the type for the props
interface ModulesControlsProps {
    onCollapseAll: () => void; // Function to collapse all modules
    moduleName: string; // The name of the module to be added
    setModuleName: (title: string) => void; // Function to set the module name
    addModule: () => void; // Function to add the module
}

export default function ModulesControls(
    { onCollapseAll, moduleName, setModuleName, addModule }: ModulesControlsProps
) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            {/* Collapse All Button */}
            <button
                id="wd-collapse-all"
                className="btn btn-lg btn-secondary me-1 float-end"
                onClick={onCollapseAll} // Call the collapse function when clicked
            >
                Collapse All
            </button>

            {/* Add Module Button */}
            <button
                className="btn btn-lg btn-danger me-1 float-end"
                id="wd-add-module-btn"
                data-bs-toggle="modal"
                data-bs-target="#wd-add-module-dialog"
                onClick={addModule} // Call addModule when the button is clicked
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>

            {/* Publish All Dropdown */}
            <div className="dropdown d-inline me-1 float-end">
                <button
                    id="wd-publish-all-btn"
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish modules only
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Unpublish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Unpublish modules only
                        </a>
                    </li>
                </ul>
            </div>

            {/* View Progress Button */}
            <button id="wd-view-progress" className="btn btn-lg btn-primary me-1 float-end">
                View Progress
            </button>

            {/* ModuleEditor Dialog */}
            <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                          setModuleName={setModuleName} addModule={addModule} />
        </div>
    );
}
