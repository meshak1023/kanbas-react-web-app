import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} alt="React JS"/>
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
                        <img src="/images/Node.png" width={200} alt="Node.js"/>
                        <div>
                            <h5>CS2345 Node.js</h5>
                            <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
                        <img src="/images/Python.png" width={200} alt="Python for Data Science"/>
                        <div>
                            <h5>CS3456 Python for Data Science</h5>
                            <p className="wd-dashboard-course-title">Introduction to Data Science with Python</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
                        <img src="/images/Machine_Learning.jpg" width={200} alt="Machine Learning"/>
                        <div>
                            <h5>CS4567 Machine Learning</h5>
                            <p className="wd-dashboard-course-title">Machine Learning with Python and TensorFlow</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
                        <img src="/images/UI.jpeg" width={200} alt="UI/UX Design"/>
                        <div>
                            <h5>CS5678 UI/UX Design</h5>
                            <p className="wd-dashboard-course-title">Designing User Interfaces and Experiences</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
                        <img src="/images/Devops.png" width={200} alt="DevOps"/>
                        <div>
                            <h5>CS6789 DevOps</h5>
                            <p className="wd-dashboard-course-title">Automating Deployment and Infrastructure</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
                        <img src="/images/Cloud.jpeg" width={200} alt="Cloud Computing"/>
                        <div>
                            <h5>CS7890 Cloud Computing</h5>
                            <p className="wd-dashboard-course-title">Introduction to Cloud Services and Architecture</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

