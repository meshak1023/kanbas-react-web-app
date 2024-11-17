import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa"; // Import trashcan and plus icons
import { TiDelete } from "react-icons/ti"; // Import X icon for the second delete button
import { FaPencil } from "react-icons/fa6"; // Import pencil icon for editing

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Fetch all todos when the component loads
    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };

    // Create a new todo item and replace the entire list
    const createTodo = async () => {
        const updatedTodos = await client.createTodo();
        setTodos(updatedTodos);
    };

    // Post a new todo item with default properties and append to the list
    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
        setTodos([...todos, newTodo]);
    };

    // Delete function with error handling
    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo.id);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || "An error occurred while deleting the todo.");
        }
    };

    // Update function with error handling
    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);
            setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: false } : t)));
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || "An error occurred while updating the todo.");
        }
    };

    // Enable edit mode for a specific todo item
    const editTodo = (todo: any) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...t, editing: true } : t)));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div id="wd-asynchronous-arrays" className="container p-3">
            <h3>Working with Arrays Asynchronously</h3>

            {/* Display error message if there's an error */}
            {errorMessage && (
                <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <h4 className="d-flex align-items-center">
                Todos
                <FaPlusCircle
                    onClick={postTodo}
                    className="text-primary ms-auto me-2 fs-3"
                    id="wd-post-todo"
                    role="button"
                    title="Post New Todo"
                />
                <FaPlusCircle
                    onClick={createTodo}
                    className="text-success fs-3"
                    id="wd-create-todo"
                    role="button"
                    title="Add Todo"
                />
            </h4>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={todo.completed}
                                onChange={(e) =>
                                    updateTodo({ ...todo, completed: e.target.checked })
                                }
                            />
                            {!todo.editing ? (
                                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                                    {todo.title}
                                </span>
                            ) : (
                                <input
                                    type="text"
                                    className="form-control w-50"
                                    defaultValue={todo.title}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            updateTodo({ ...todo, editing: false });
                                        }
                                    }}
                                    onChange={(e) => {
                                        const updatedTitle = e.target.value;
                                        setTodos(todos.map((t) =>
                                            t.id === todo.id ? { ...t, title: updatedTitle } : t
                                        ));
                                    }}
                                />
                            )}
                        </div>
                        <div>
                            <FaPencil
                                onClick={() => editTodo(todo)}
                                className="text-primary me-2 mt-1"
                                role="button"
                                title="Edit Todo"
                            />
                            <TiDelete
                                onClick={() => deleteTodo(todo)}
                                className="text-danger fs-4 me-2"
                                role="button"
                                title="Delete Todo (X)"
                            />
                            <FaTrash
                                onClick={() => deleteTodo(todo)}
                                className="text-danger"
                                role="button"
                                title="Remove Todo"
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
