import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length)
            savePhoto(e.target.files[0]);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <h1>{profile.fullName}</h1>
                </div>
                <div className={s.mainPhotoContainer}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    { isOwner && <label className={s.fileInput}>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                        Update photo
                    </label> }
                </div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                <div>
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
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;