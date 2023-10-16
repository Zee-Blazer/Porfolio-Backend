const express = require("express");
const router = express.Router();

const { Blog } = require("../../Models/blog");

router.get('/all-blogs/:id', (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then( doc => res.status(200).json({
            msg: "Data fetched Successfully!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error fetching data",
            solution: "Please try again",
            err
        }) )
})

router.get("/all-blog", (req, res) => {
    Blog.find()
        .then( doc => res.status(200).json({
            msg: "All data fetched Successfully",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error fetching the data",
            solution: "Please try again",
            err
        }) )
})

module.exports = router;
