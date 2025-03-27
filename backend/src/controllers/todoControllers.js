const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTodo = async (req, res, next) => {
  if (!req.body.todoName) {
    return res
      .status(400)
      .json({ error: { message: "Task name must be not empty" } });
  }
  try {
    const { todoName } = req.body;
    const newTodo = await prisma.todo.create({
      data: { todoName },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    next();
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({
      where: { todoId: Number(id) },
    });
    todo
      ? res.status(200).json(todo)
      : res.status(404).json({ error: { message: "Task not found" } });
  } catch (error) {
    next(error);
  }
};

exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await prisma.todo.findUnique({
      where: { todoId: Number(id) },
    });
    if (!todo) {
      return res.status(404).json({ error: { message: "Task not found" } });
    } else {
      await prisma.todo.delete({
        where: { todoId: Number(id) },
      });
      return res.status(204);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  const id = req.params.id;
  if (!req.body.todoName && !req.body.isDone) {
    return res.status(400).json({ error: { message: "No data for updating" } });
  }
  const todo = await prisma.todo.findUnique({
    where: { todoId: Number(id) },
  });
  if (!todo) {
    return res.status(404).json({ error: { message: "Task not found" } });
  }
  const { todoName, isDone } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: { todoId: Number(id) },
      data: { todoName, isDone },
    });
    res.status(200).json({ message: "Task updated successfuly" });
  } catch (error) {
    next(error);
  }
};
