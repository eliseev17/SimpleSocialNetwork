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

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Валера" id="1" />
                    <DialogItem name="иOne" id="2" />
                    <DialogItem name="Сан Саныч" id="3" />
                    <DialogItem name="Сашка Попуг" id="4" />
                    <DialogItem name="Кириллл" id="5" />
                </div>
                <div className={s.messages}>
                    <Message message="Здарова" />
                    <Message message="Ну шо?" />
                    <Message message="Го пить пиво" />
                    <Message message="Ыть" />
                    <Message message="Кавооо?" />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;