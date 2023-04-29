const mongoose = require('mongoose');

const todoScheme = new mongoose.Schema({
    todoText: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Todo', todoScheme);