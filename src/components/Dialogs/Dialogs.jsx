import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className="dialogs-items">
                    <div className="dialog">
                        Валера
                    </div>
                    <div className="dialog">
                        иOne
                    </div>
                    <div className="dialog">
                        Сан Саныч
                    </div>
                    <div className="dialog">
                        Сашка Попуг
                    </div>
                    <div className="dialog">
                        Кириллл
                    </div>
                </div>
            </div>
            <div className="messages">
                <div className="message">
                    Здарова
                </div>
                <div className="message">
                    Ну шо?
                </div>
                <div className="message">
                    Го пить пиво
                </div>
                <div className="message">
                    Ыть
                </div>
                <div className="message">
                    Кавооо?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;