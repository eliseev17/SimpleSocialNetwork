import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField(Input, "full name", "fullName", [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField(Input, "", "lookingForAJob", [], {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createField(Textarea, "My professional skills", "lookingForAJobDescription", [])}
        </div>
        <div>
            <b>About me</b>: {createField(Textarea, "About me", "aboutMe", [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => {return <div key={key} className={s.contact}>
                <b>{key}:</b> {createField(Input, key, "contacts." + key, [])}
            </div>})}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm;