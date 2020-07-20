import axios from 'axios'

export const insertMsg = payload => api.post(`/api/message`, payload)
export const getAllMsg = () => axios.get('/api/messages')
export const updateMsgById = (id, payload) => api.put(`/api/message/${id}`, payload)
export const deleteMsgById = id => api.delete(`/api/message/${id}`)
export const deleteAllMsg = () => api.delete(`/api/messages`)
export const getMsgById = id => api.get(`/api/message/${id}`)

const apis = {
    insertMsg,
    getAllMsg,
    updateMsgById,
    deleteMsgById,
    deleteAllMsg,
    getMsgById,
}

export default apis