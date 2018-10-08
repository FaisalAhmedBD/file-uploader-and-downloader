var mongoose = require('mongoose')
var fileSchema = new mongoose.Schema({
    file: String
})
module.exports = {
    fileSchema,
    mongoose
}