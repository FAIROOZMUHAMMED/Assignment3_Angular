const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    nationality : String,
    image : String,
    details : String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;