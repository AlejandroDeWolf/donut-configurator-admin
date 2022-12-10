import React from 'react'
import { Sidebar } from "../components";

const Profile = () => {
    return (
        <>
            <Sidebar />
            <div className="profile">
                <div className="profile__content">
                    <div className="profile__content__title">
                        <h2>Profile</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile