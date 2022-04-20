import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        { isOwner && <div>
            <button onClick={activateEditMode}>Редактировать</button>
        </div> }
        <div>
            <b>В поиске работы</b>: {profile.lookingForAJob ? "да" : "нет"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Мои профессиональные навыки</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Обо мне</b>: {profile.aboutMe}
        </div>
        <div>

            <b>Контакты</b>:
            <div className={s.contacts}>
                {Object.keys(profile.contacts)
                    .map(key => { return profile.contacts[key] && <Contact contactTitle={key} contactValue={profile.contacts[key]}/> })}
            </div>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    let chooseContactIcon = () => {
        if (contactTitle === "facebook")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt=""/>
        if (contactTitle === "twitter")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt=""/>
        if (contactTitle === "vk")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/25/25684.png" alt=""/>
        if (contactTitle === "github")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt=""/>
        if (contactTitle === "instagram")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/733/733614.png" alt=""/>
        if (contactTitle === "youtube")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt=""/>
        if (contactTitle === "website")
            return <img className={s.contactPhoto} src="https://cdn-icons.flaticon.com/png/512/2721/premium/2721688.png?token=exp=1650451586~hmac=1350a94d213b2309cfe8c8a9b6175c0c" alt=""/>
        if (contactTitle === "mainLink")
            return <img className={s.contactPhoto} src="https://cdn-icons-png.flaticon.com/512/455/455691.png" alt=""/>
    }

    return <span className={s.contact}>
        <a href={contactValue}>{chooseContactIcon()}</a>
    </span>
}

export default ProfileData;