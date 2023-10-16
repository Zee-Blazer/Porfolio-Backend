const express = require("express");
const router = express.Router();

const { Message } = require("../../Models/message");

router.get('/all-msg', (req, res) => {
    Message.find()
        .then( doc => res.status(200).json({
            msg: "Data fetched successfully!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "An error occured",
            solution: "Please try again",
            err
        }) )
})

module.exports = router;
