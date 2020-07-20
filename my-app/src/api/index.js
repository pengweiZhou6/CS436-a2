import axios from 'axios'

export const insertMsg = payload => axios.post(`/api/message`, payload)
export const getAllMsg = () => axios.get('/api/messages')
export const updateMsgById = (id, payload) => axios.put(`/api/message/${id}`, payload)
export const deleteMsgById = id => axios.delete(`/api/message/${id}`)
export const deleteAllMsg = () => axios.delete(`/api/messages`)
export const getMsgById = id => axios.get(`/api/message/${id}`)

const apis = {
    insertMsg,
    getAllMsg,
    updateMsgById,
    deleteMsgById,
    deleteAllMsg,
    getMsgById,
}

export default apis