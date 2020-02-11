const { Schema, model } = require('mongoose');


const MentorsSchema = new Schema({
    name: { type: String, required: true },
    topic: { type: String, required: true },
    tasks: [{ 
        title: { type: String, required: true },
         body: { type: String, required: true } 
        }]
});
module.exports = model('Mentor', MentorsSchema)