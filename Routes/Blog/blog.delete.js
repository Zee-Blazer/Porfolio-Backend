const express = require("express");
const router = express.Router();

const { Blog } = require("../../Models/blog");

router.delete('/delete-blog/:id', (req, res) => {
    Blog.deleteOne({ _id: req.params.id })
        .then( doc => res.status(200).json({
            msg: "Blog Successfully deleted!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "Sorry action was Unsuccessful!!",
            solution: "Try again",
            err
        }) )
})

module.exports = router;
