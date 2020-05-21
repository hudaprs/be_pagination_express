const Todo = require("../models/Todo");
const { success, error } = require("../helpers/responseApi");

exports.getTodos = async (req, res) => {
  try {
    res
      .status(200)
      .json(success("Todo List", await res.paginate(Todo), res.statusCode));
  } catch (err) {
    console.error(err.message);
    res.status(500).json(error("Server error", res.statusCode));
  }
};
