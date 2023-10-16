const mongoose = require("mongoose");

const credentials = {
    type: String,
    required: true
}

const blogSchema = mongoose.Schema({
    image: credentials,
    date: credentials,
    summary: credentials,
    body: credentials,
    status: {
        type: Boolean,
        required: true
    },
    title: credentials
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
