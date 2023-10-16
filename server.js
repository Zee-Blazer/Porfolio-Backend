const express = require("express");
const mongoose = require("mongoose");

require("dotenv");

mongoose.connect("mongodb://localhost:27017/portfolio");
const DB = mongoose.connection
DB.once("open", function () {
    console.log("Database is running successfully");
})

const app = express();

// Body parser Middleware
app.use(express.json());
// Url Encoded
app.use(express.urlencoded({ extended: false }));

// Blog API
app.use("/blog", require('./Routes/Blog/blog.post')); // Post API
app.use('/blog', require("./Routes/Blog/blog.get")) // Get API
app.use('/blog', require("./Routes/Blog/blog.delete")) // Delete API

app.use('/project', require("./Routes/Projects/project.post")); // Post API
app.use('/project', require("./Routes/Projects/project.get")); // Get API
app.use('/project', require("./Routes/Projects/project.delete")); // Delete API

app.use('/message', require('./Routes/Messages/msg.post')) // Post API
app.use('/message', require('./Routes/Messages/msg.get')) // Get API

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
