export const ADD_MSG = 'ADD_MSG'
export const DELETE_MSG = 'DELETE_MSG'
export const POP_MSG = 'POP_MSG'

// export function addMSG(newMSG){
//     return{
//         type:ADD_MSG,
//         newMSG,
//         info:'Add message action'
//     }
// }
// export function deleteMSG(){
//     return{
//         type:DELETE_MSG,
//         info:'delete message action'
//     }
// }
let id = 2
export const addMSG = (name,text) => ({
    type: ADD_MSG,
    name,
    text,
    id: id++
})

export const popMSG = id => ({
    type: POP_MSG,
    id
})
console.log("111222333")
console.log("port:",process.env.PORT);
export const deleteMSG = id => {
    return {
        type: DELETE_MSG,
        id: id
    }
}
// export const setVisibility = Visibility => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })


//
// export const deleteMSG = newMSG => {
//     return {
//         type: ADD_MSG
//     };
// }
