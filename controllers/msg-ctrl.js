const Message = require('../models/msgModel')

createMsg = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a msg',
        })
    }

    const msg = new Message(body)

    if (!msg) {
        return res.status(400).json({ success: false, error: err })
    }

    msg
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: msg._id,
                message: 'Message created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Message not created!',
            })
        })
}

updateMsg = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Message.findOne({ _id: req.params.id }, (err, msg) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Message not found!',
            })
        }
        msg.name = body.name
        msg.msg = body.msg
        if(body.type !== null) {
            msg.type = body.type
        }
        msg
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: msg._id,
                    message: 'Message updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Message not updated!',
                })
            })
    })
}

deleteMsg = async (req, res) => {
    await Message.findOneAndDelete({ _id: req.params.id }, (err, msg) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!msg) {
            return res
                .status(404)
                .json({ success: false, error: `msg not found` })
        }

        return res.status(200).json({ success: true, data: msg })
    }).catch(err => console.log(err))
}

deleteAllMsg = async (req, res) => {
    await Message.deleteMany({}, (err, msg) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!msg) {
            return res
                .status(404)
                .json({ success: false, error: `msg not found` })
        }

        return res.status(200).json({ success: true, data: msg })
    }).catch(err => console.log(err))
}

getMsgById = async (req, res) => {
    await Message.findOne({ _id: req.params.id }, (err, msg) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!msg) {
            return res
                .status(404)
                .json({ success: false, error: `msg not found` })
        }
        return res.status(200).json({ success: true, data: msg })
    }).catch(err => console.log(err))
}

getMsg = async (req, res) => {
    await Message.find({}, (err, msgs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!msgs.length) {
            return res
                .status(404)
                .json({ success: false, error: `msgs not found` })
        }
        return res.status(200).json({ success: true, data: msgs })
    }).catch(err => console.log(err))
}

module.exports = {
    createMsg,
    updateMsg,
    deleteMsg,
    getMsg,
    deleteAllMsg,
    getMsgById,
}