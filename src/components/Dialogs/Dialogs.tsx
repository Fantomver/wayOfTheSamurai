import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

interface dialogItemProps {
    name: string
    id: number
}

const DialogItem = (props: dialogItemProps) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

const Message = (props: any) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Dima'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-ka?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;