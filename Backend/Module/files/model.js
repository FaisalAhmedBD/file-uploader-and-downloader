var { fileSchema, mongoose } = require('./schema');
var fileModel = mongoose.model('files', fileSchema);
module.exports = {
    fileModel
}