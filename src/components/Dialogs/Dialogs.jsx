import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message..." name="newMessageBody" component="textarea"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;