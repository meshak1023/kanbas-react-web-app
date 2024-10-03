import { Link } from "react-router-dom";
import './styles.css'; // Import custom styles for the dashboard

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4"> {/* Responsive grid layout */}
                    {[
                        { id: 1234, title: 'CS1234 React JS', desc: 'Full Stack software developer', img: '/images/reactjs.jpg' },
                        { id: 2345, title: 'CS2345 Node.js', desc: 'Backend Development with Node.js', img: '/images/Node.png' },
                        { id: 3456, title: 'CS3456 Python for Data Science', desc: 'Introduction to Data Science with Python', img: '/images/Python.png' },
                        { id: 4567, title: 'CS4567 Machine Learning', desc: 'Machine Learning with Python and TensorFlow', img: '/images/Machine_Learning.jpg' },
                        { id: 5678, title: 'CS5678 UI/UX Design', desc: 'Designing User Interfaces and Experiences', img: '/images/UI.jpeg' },
                        { id: 6789, title: 'CS6789 DevOps', desc: 'Automating Deployment and Infrastructure', img: '/images/Devops.png' },
                        { id: 7890, title: 'CS7890 Cloud Computing', desc: 'Introduction to Cloud Services and Architecture', img: '/images/cloud.jpg' },
                    ].map(course => (
                        <div className="wd-dashboard-course col" style={{ width: "260px", margin: "30px 0" }} key={course.id}> {/* Fixed width and spacing */}
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course.id}/Home`}>
                                    <img src={course.img} width="100%" height={160} alt={course.title} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                                        <p className="wd-dashboard-course-text">{course.desc}</p>
                                        <button className="btn btn-primary">Go</button>
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


