const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{id: 1, photoUrl: "https://rgnp.ru/wp-content/uploads/8/0/3/8033845ed0c1f97d4bb3a649f9dc2c7a.jpeg", followed: true, name: "Dmitriy", status: "I am a boss", location: {country: "Belarus", city: "Minsk"} },
        {id: 2, photoUrl: "https://rgnp.ru/wp-content/uploads/8/0/3/8033845ed0c1f97d4bb3a649f9dc2c7a.jpeg", followed: false, name: "Ivan", status: "I am a boss too", location: {country: "Russia", city: "Moscow"} },
        {id: 3, photoUrl: "https://rgnp.ru/wp-content/uploads/8/0/3/8033845ed0c1f97d4bb3a649f9dc2c7a.jpeg", followed: false, name: "Sasha", status: "I'm not a boss", location: {country: "Ukraine", city: "Kiev"} },
        {id: 4, photoUrl: "https://rgnp.ru/wp-content/uploads/8/0/3/8033845ed0c1f97d4bb3a649f9dc2c7a.jpeg", followed: true, name: "Ashcan", status: "I am a horse's milk", location: {country: "Kazakhstan", city: "Astana"} }
    */]
};

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;