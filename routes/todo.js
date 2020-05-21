const router = require("express").Router();
const { getTodos } = require("../app/controllers/TodoController");
const pagination = require("../app/middleware/pagination");

router.get("/", pagination, getTodos);

module.exports = router;
