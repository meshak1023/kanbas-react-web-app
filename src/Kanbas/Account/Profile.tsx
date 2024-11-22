import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // Update the profile on the server
    const updateProfile = async () => {
        try {
            const updatedProfile = await client.updateUser(profile);
            dispatch(setCurrentUser(updatedProfile)); // Update Redux state
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Failed to update profile:", error);
            alert("Error updating profile.");
        }
    };

    // Fetch the current user profile
    const fetchProfile = () => {
        if (!currentUser) {
            navigate("/Kanbas/Account/Signin");
        } else {
            setProfile(currentUser);
        }
    };

    // Sign out and clear the user state
    const signout = async () => {
        try {
            await client.signout();
            dispatch(setCurrentUser(null));
            navigate("/Kanbas/Account/Signin");
        } catch (error) {
            console.error("Failed to sign out:", error);
        }
    };

    // Fetch the profile on component mount
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <input
                        defaultValue={profile.username}
                        id="wd-username"
                        className="form-control mb-2"
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                    <input
                        defaultValue={profile.password}
                        id="wd-password"
                        className="form-control mb-2"
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                    />
                    <input
                        defaultValue={profile.firstName}
                        id="wd-firstname"
                        className="form-control mb-2"
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />
                    <input
                        defaultValue={profile.lastName}
                        id="wd-lastname"
                        className="form-control mb-2"
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    />
                    <input
                        defaultValue={profile.dob}
                        id="wd-dob"
                        className="form-control mb-2"
                        type="date"
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    />
                    <input
                        defaultValue={profile.email}
                        id="wd-email"
                        className="form-control mb-2"
                        type="email"
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    <select
                        defaultValue={profile.role}
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                        className="form-control mb-2"
                        id="wd-role"
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <div>
                        <button
                            onClick={updateProfile}
                            className="btn btn-primary w-100 mb-2"
                            id="wd-update-btn"
                        >
                            Update
                        </button>
                        <button
                            onClick={signout}
                            className="btn btn-danger w-100 mb-2"
                            id="wd-signout-btn"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
