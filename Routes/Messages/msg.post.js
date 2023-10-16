const express = require("express");
const router = express.Router();

const { Message } = require("../../Models/message");

router.post('/new-msg', (req, res) => {
    const msg = new Message(req.body);

    msg.save()
        .then( doc => res.status(200) )
        .catch( err => res.status(400).json({
            msg: "There was an error sending message",
            solution: "Please try again",
            err
        }) )
})

module.exports = router;
