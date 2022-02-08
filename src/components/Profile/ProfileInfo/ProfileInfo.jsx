import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://www.southwestbusinesscouncil.co.uk/wp-content/uploads/2019/09/Machine-Learning.jpg'
                     alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;