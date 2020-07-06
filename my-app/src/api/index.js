import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
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