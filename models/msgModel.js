const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema(
    {
        name: { type: String, required: true },
        msg: { type: String, required: true },
        type: { type: String},
    },
    { timestamps: true },
)

module.exports = mongoose.model('messages', Message)