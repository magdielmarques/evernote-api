const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  author: { //relaction with another collection (table)
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
})

noteSchema.index({ 'title': 'text', 'body': 'text' });

module.exports = mongoose.model('Note', noteSchema);