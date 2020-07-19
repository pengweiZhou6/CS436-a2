const express = require('express')

const MsgCtrl = require('../controllers/msg-ctrl')

const router = express.Router()

router.post('/message', MsgCtrl.createMsg)
router.put('/message/:id', MsgCtrl.updateMsg)
router.delete('/message/:id', MsgCtrl.deleteMsg)
router.delete('/messages', MsgCtrl.deleteAllMsg)
router.get('/message/:id', MsgCtrl.getMsgById)
router.get('/messages', MsgCtrl.getMsg)

module.exports = router