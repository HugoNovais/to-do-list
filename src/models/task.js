const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {type: String, require: true},
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'Checklist',
        require: true
    }
})

module.exports = mongoose.model('Task', taskSchema);