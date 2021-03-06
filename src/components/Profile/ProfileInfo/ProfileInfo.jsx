import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length)
            savePhoto(e.target.files[0]);
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <h1 className={s.fullName}>{profile.fullName}</h1>
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                </div>
                <div className={s.mainPhotoContainer}>
                    <span className={s.changesInputOnImgHover}>
                       <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                        { isOwner && <label className={s.fileInput}>
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                            Обновить фотографию
                        </label> }
                    </span>
                </div>
                { editMode
                    ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => {setEditMode(true)}}/> }
            </div>
        </div>
    )
}

export default ProfileInfo;