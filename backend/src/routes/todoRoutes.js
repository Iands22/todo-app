const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoControllers')
const validateId = require('../middlewares/validateId')

router.post('/', todoController.createTodo)
router.get('/', todoController.getAllTodo)
router.get('/:id', validateId, todoController.getTodoById)
router.put('/:id', validateId, todoController.updateTodo)
router.delete('/:id', validateId, todoController.deleteTodo)

module.exports = router