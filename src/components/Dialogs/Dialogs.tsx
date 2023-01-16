import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {message} from "antd";

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

    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Dima'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-ka?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = messages.map(m =>  <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;