var express = require('express')
var router = express.Router()
const { saveFile } = require('../Module/files/controller')
router.get('/', (req, res) => {
    res.send('hello from router')
})
router.post('/upload-file', saveFile)
module.exports = {
    router
}