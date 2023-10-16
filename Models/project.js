const mongoose = require("mongoose");

const credentials = {
    type: String,
    required: true
}

const projectSchema = mongoose.Schema({
    name: credentials,
    description: credentials,
    coverPhoto: credentials,
    pictures: [ String ],
    videos: [ String ],
    techStack: [ String ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
