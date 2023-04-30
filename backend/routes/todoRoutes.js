const router = require('express').Router();
const Todo = require('../models/todo');


//! Add todo API
router.post('/add', async (req, res) => {
    const newTodo = new Todo({ ...req.body, todoText: req.body.todoText });
    const savedTodo = await newTodo.save();
    res.status(200).send(savedTodo);
});

//! Delete a todo API
router.delete('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        return res.status(404).send({
            message: 'This todo is not found😥'
        })
    } else {
        await Todo.deleteOne({ _id: req.params.id });
        res.status(200).send({
            message: `Successfully deleted ${todo.todoText} todo👍`
        });
    }
})

//! Get SPecific Id data
router.get('/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        return res.status(404).send({
            message: 'This todo is not found😥'
        })
    } else {
        res.status(200).send(todo);
    }
})


//! Get  All Todos API
router.get('/todos', async (req, res) => {
    const todos = await Todo.find({ email: req.query.email });
    console.log('ALL data', todos);
    res.status(200).send(todos);
})


//! Update a specific todo
router.put('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        return res.status(404).send({
            message: 'This todo is not found😥'
        })
    } else {
        await Todo.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(200).send({
            message: 'Successfully updated this todo👍'
        });
    }
})


module.exports = router;