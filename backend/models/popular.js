const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const popularSchema = mongoose.Schema({
    type: { type: String, required: true, unique: true },
    idArray:  [{ type: String, required: true, unique: true }],
}, { collection: 'popular' });

popularSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Popular', popularSchema);
