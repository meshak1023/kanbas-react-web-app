import React from "react";
import { FaTrash } from "react-icons/fa"; // Keep the import for FaTrash
import { FaPencil } from "react-icons/fa6"; // Import FaPencil from the fa6 package
import GreenCheckmark from "./GreenCheckmark"; // Ensure this import is correct
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5"; // Ensure you have this import

export default function ModuleControlButtons(
    { moduleId, deleteModule, editModule }: {
        moduleId: string;
        deleteModule: (moduleId: string) => void;
        editModule: (moduleId: string) => void;
    }
) {
    return (
        <div className="float-end">
            {/* Pencil icon for editing the module */}
            <FaPencil
                onClick={() => editModule(moduleId)}
                className="text-primary me-3"
                style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
            />
            {/* Trash can icon for deleting the module */}
            <FaTrash
                className="text-danger me-2 mb-1"
                onClick={() => deleteModule(moduleId)} // Call deleteModule when clicked
                style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
            />
            <GreenCheckmark />
            <BsPlus className="fs-1" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
