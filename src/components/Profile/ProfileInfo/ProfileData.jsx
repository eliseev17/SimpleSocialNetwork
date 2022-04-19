import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        { isOwner && <div>
            <button onClick={activateEditMode}>Edit info</button>
        </div> }
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => <Contact contactTitle={key} contactValue={profile.contacts[key]}/>)}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileData;