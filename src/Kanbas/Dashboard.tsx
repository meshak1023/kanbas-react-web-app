import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";

interface DashboardProps {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}

export default function Dashboard({
                                      courses,
                                      course,
                                      setCourse,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse,
                                  }: DashboardProps) {
    const getImageForCourse = (index: number) => {
        const customImages = [
            "/images/rocket.jpg",
            "/images/aerodynamics.jpg",
            "/images/spacecraft.jpeg"
        ];
        return index < customImages.length ? customImages[index] : "/images/reactjs.jpg";
    };

    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h5>
                New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}
                >
                    Add
                </button>
                <button
                    className="btn btn-warning float-end me-2"
                    onClick={updateCourse}
                    id="wd-update-course-click"
                >
                    Update
                </button>
            </h5>
            <br />
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
                value={course.description}
                className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((courseItem, index) => (
                        <div key={courseItem._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    to={`/Kanbas/Courses/${courseItem._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img
                                        src={getImageForCourse(index)}
                                        width="100%"
                                        height={160}
                                        alt={courseItem.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {courseItem.name}
                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {courseItem.description}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-primary">Go</button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(courseItem);
                                                }}
                                                className="btn btn-warning me-2"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(courseItem._id);
                                                }}
                                                className="btn btn-danger"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
