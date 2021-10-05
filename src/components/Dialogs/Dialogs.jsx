import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
      <div className={s.message}>{props.message}</div>
  )
}

let dialogs = [
    {id: 1, name: "Валера"},
    {id: 2, name: "иOne"},
    {id: 3, name: "Сан Саныч"},
    {id: 4, name: "Сашка Попуг"},
    {id: 5, name: "Кириллл"}
];

let messages = [
    {id: 1, message: "Здарова"},
    {id: 2, message: "Ну шо?"},
    {id: 3, message: "Го пить пиво"},
    {id: 4, message: "Ыть"},
    {id: 5, message: "Кавооо?"}
];

let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
let messagesElements = messages.map( message => <Message message={message.message} /> );

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;