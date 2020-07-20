export const ADD_MSG = 'ADD_MSG'
export const DELETE_MSG = 'DELETE_MSG'
export const POP_MSG = 'POP_MSG'
const aws = require('aws-sdk');
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

let s3 = new aws.S3({
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    port: process.env.PORT
});

console.log("port:",s3);

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
