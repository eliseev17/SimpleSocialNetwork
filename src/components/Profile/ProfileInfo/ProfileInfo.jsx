import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length)
            savePhoto(e.target.files[0]);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;