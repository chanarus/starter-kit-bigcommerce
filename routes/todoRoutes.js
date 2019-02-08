const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/todoController");

router.route("/").get(TodoController.getTodos);

module.exports = router;
