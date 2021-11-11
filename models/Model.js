const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema(
    { value: { type: String, required: true }, username: { type: String }, }
)
const Model = mongoose.model('documents', schema)
module.exports = Model