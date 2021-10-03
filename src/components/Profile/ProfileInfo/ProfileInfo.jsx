import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.southwestbusinesscouncil.co.uk/wp-content/uploads/2019/09/Machine-Learning.jpg'
                     alt=''/>
                {/*<img src="https://cs8.pikabu.ru/avatars/2012/x2012300-73588661.png" alt=""/>*/}
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;