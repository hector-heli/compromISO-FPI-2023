const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProgramSchema = new Schema({
    code: { type: Number, required: true },
    initials: { type: String, required: true },
    name: { type: String, required: true },
    learningResults: [
      { 
        code: Number,
        result: String
      }
    ]
});

module.exports = mongoose.model('Program', ProgramSchema);