import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;

    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>

            {/* Retrieve all todos */}
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr />

            {/* Retrieve a specific todo by ID */}
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <input
                id="wd-todo-id"
                className="form-control w-50"
                defaultValue={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                placeholder="Enter Todo ID"
            />
            <hr />

            {/* Create a new todo item */}
            <h4>Creating new Items in an Array</h4>
            <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <hr />

            {/* Delete a todo item by ID */}
            <h4>Deleting from an Array</h4>
            <a
                id="wd-delete-todo"
                className="btn btn-danger float-end"
                href={`${API}/${todo.id}/delete`}
            >
                Delete Todo with ID = {todo.id}
            </a>
            <input
                className="form-control w-50"
                defaultValue={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                placeholder="Enter Todo ID to Delete"
            />
            <hr />

            {/* Update the description of a todo item by ID */}
            <h4>Updating Todo Description</h4>
            <a
                id="wd-update-todo-description"
                className="btn btn-primary float-end"
                href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
            >
                Update Description
            </a>
            <input
                className="form-control w-50"
                defaultValue={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                placeholder="Enter New Description"
            />
            <hr />

            {/* Update the completed status of a todo item by ID */}
            <h4>Updating Todo Completed Status</h4>
            <a
                id="wd-update-todo-completed"
                className="btn btn-primary float-end"
                href={`${API}/${todo.id}/completed/${todo.completed}`}
            >
                Update Completed Status
            </a>
            <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            />
            <label className="form-check-label ms-2">Completed</label>
            <hr />
        </div>
    );
}
