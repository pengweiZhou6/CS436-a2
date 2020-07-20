import axios from 'axios'
const aws = require('aws-sdk');
let s3 = new aws.S3({
    port: process.env.PORT,
});

const apiPort = s3.port || 8000


const api = axios.create({
    baseURL: 'http://localhost:'+ apiPort +'/api',
})


export const insertMsg = payload => api.post(`/message`, payload)
export const getAllMsg = () => api.get(`/messages`)
export const updateMsgById = (id, payload) => api.put(`/message/${id}`, payload)
export const deleteMsgById = id => api.delete(`/message/${id}`)
export const deleteAllMsg = () => api.delete(`/messages`)
export const getMsgById = id => api.get(`/message/${id}`)

const apis = {
    insertMsg,
    getAllMsg,
    updateMsgById,
    deleteMsgById,
    deleteAllMsg,
    getMsgById,
}

export default apis