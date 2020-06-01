import { combineReducers } from 'redux';
import {ADD_MSG, DELETE_MSG,POP_MSG} from "../action";
const initialState =
    [
        {
            id:0,
            name: "Oliver",
            msg: "Hello React",
            dateTime: "2020-5-31 16:34:27",
            showpopup: false
        },
        {
            id:1,
            name: "Zhou",
            msg: "Hello Redux",
            dateTime: "2020-5-30 16:34:27",
            showpopup: false
        }
    ];

const reducer =(state=initialState,action) => {
    switch (action.type) {
        case ADD_MSG:
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;
            console.log(dateTime)
            return [
                ...state,
                {
                    id: action.id,
                    msg: action.text,
                    name: action.name,
                    dateTime: dateTime,
                    showpopup: false
                }
            ]
        case DELETE_MSG:
            return state.filter(e => e.id !== action.id);
        case POP_MSG:
            return state.map(m =>
                (m.id === action.id)
                    ? {...m, showpopup: !m.showpopup}
                    : m
            )
        default:
            console.log("Default in reducer")
            return state
    }
}
export default combineReducers({
    msg: reducer,
});