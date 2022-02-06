const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Валера"},
        {id: 2, name: "иOne"},
        {id: 3, name: "Сан Саныч"},
        {id: 4, name: "Сашка Попуг"},
        {id: 5, name: "Кириллл"}
    ],
    messages: [
        {id: 1, message: "Здарова"},
        {id: 2, message: "Ну шо?"},
        {id: 3, message: "Го пить пиво"},
        {id: 4, message: "Ыть"},
        {id: 5, message: "Кавооо?"}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer;