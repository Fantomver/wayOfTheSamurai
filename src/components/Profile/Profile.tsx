import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostsType = {
    id: number,
    message: string,
    likesCount:string
}

type PropsPostsType = {
    posts:PostsType[]
}

const Profile = (props:PropsPostsType) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.posts}  />
        </div>
    )
}

export default Profile;
