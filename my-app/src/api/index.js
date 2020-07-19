import axios from 'axios'


const apiPort = process.env.PORT || 8000




export const insertMsg = payload => axios.post('/message', payload)
export const getAllMsg = () => axios.get('/messages')
export const updateMsgById = (id, payload) => axios.put(`/message/${id}`, payload)
export const deleteMsgById = id => axios.delete(`/message/${id}`)
export const deleteAllMsg = () => axios.delete(`/messages`)
export const getMsgById = id => axios.get(`/message/${id}`)

const apis = {
    insertMsg,
    getAllMsg,
    updateMsgById,
    deleteMsgById,
    deleteAllMsg,
    getMsgById,
}

export default apis