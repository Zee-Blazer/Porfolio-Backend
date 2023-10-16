const mongoose = require("mongoose");

const credentials = {
    type: String,
    required: true
}

const msgSchema = mongoose.Schema({
    name: credentials,
    email: credentials,
    message: credentials
});

const Message = mongoose.model("Messages", msgSchema);

module.exports = { Message };
