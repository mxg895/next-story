const mongoose = require('mongoose');

const nextStoryTagSchema = mongoose.Schema({
    id: { type: String, required: true },
    tagName: { type: String, required: true },
    tagDescription: { type: String, required: true },
}, { collection: 'nextStoryTags' });

module.exports = mongoose.model('NextStoryTag', nextStoryTagSchema);
