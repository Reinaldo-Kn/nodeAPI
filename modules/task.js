const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true 
    },
    completed:{
        type: Boolean,
        require: true,
        default: false
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;