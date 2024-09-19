export default function CourseStatus() {
    const buttonRowStyle = {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
    };

    const buttonStyle = {
        display: 'block',
        width: '100%',
        marginBottom: '5px'
    };
    return (
        <div id="wd-course-status" className="course-status-sidebar">
            <h2>Course Status</h2>
            <div className="status-actions">
                <button>Unpublish</button>
                <button>Publish</button>
            </div>

            <div className="status-buttons">
                <button style={buttonStyle}>Import Existing Content</button>
                <button style={buttonStyle}>Import from Commons</button>
                <button style={buttonStyle}>Choose Home Page</button>
                <button style={buttonStyle}>View Course Stream</button>
                <button style={buttonStyle}>New Announcement</button>
                <button style={buttonStyle}>View Analytics</button>
                <button style={buttonStyle}>View Course Notifications</button>
            </div>
        </div>
    );
}
