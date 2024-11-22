import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

// Define the Todo type if not already defined
interface Todo {
    id: string;
    title: string;
}

// Define the props for the component
interface TodoItemProps {
    todo: Todo; // Expecting a Todo object as a prop
}

export default function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch();

    // Check if todo is defined
    if (!todo) {
        return null; // Optionally return null or some fallback UI if todo is not available
    }

    return (
        <li className="list-group-item">
            <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
                Delete
            </button>
            <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
                Edit
            </button>
            {todo.title}
        </li>
    );
}