var { fileModel } = require('./model')

const saveFile = (req, res) => {
    const file = req.body;
    const newFile = new fileModel({
        file
    })
    newFile.save(error => {
        if (error)
            console.log('error while saving file, ', error)
        res.status(200).send('File successfully saved in database')
    })
}
module.exports = {
    saveFile
}