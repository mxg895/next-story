const mongoose = require('mongoose');

const nextStoryTagSchema = mongoose.Schema({
    tagName: { type: String, required: true },
    tagDescription: { type: String, required: true },
}, { collection: 'nextStoryTags' });

module.exports = mongoose.model('NextStoryTag', nextStoryTagSchema);
