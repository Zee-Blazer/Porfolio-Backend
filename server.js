const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

// mongoose.connect(process.env.ATLAS_URL); 
mongoose.connect(process.env.ATLAS_URL); 
const DB = mongoose.connection
DB.once("open", function () {
    console.log("Database is running successfully");
})

const app = express();

// CORS for application API
app.use(cors());

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
