const express = require("express");
const app = express();
const connectDB = require("./config/db");
const port = 5000;

// Connect to MongoDB
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/todos", require("./routes/todo"));

app.listen(port, () => console.log(`Server started at port ${port}...`));
