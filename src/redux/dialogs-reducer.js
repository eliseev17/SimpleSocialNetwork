const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Иван"},
        {id: 2, name: "Мария"},
        {id: 3, name: "Александр"},
        {id: 4, name: "Фёдор"},
        {id: 5, name: "Кирилл"}
    ],
    messages: [
        {id: 1, message: "Привет!"},
        {id: 2, message: "Как дела?"},
        {id: 3, message: "React + Redux"},
        {id: 4, message: "Learn JS"},
        {id: 5, message: "Пока"}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;