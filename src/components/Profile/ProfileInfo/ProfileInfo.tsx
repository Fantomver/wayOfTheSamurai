import React from "react";
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://as2.ftcdn.net/v2/jpg/04/72/11/03/1000_F_472110326_tsGsgW7CSGckaFkGDIw2Beu3WEVnyEjT.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;