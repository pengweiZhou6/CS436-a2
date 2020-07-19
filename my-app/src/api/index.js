import axios from 'axios'


const apiPort = process.env.PORT || 8000


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