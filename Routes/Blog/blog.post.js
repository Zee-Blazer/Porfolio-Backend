const express = require('express');
const router = express.Router();

const moment = require('moment'); // Moment for time management

const { Blog } = require('../../Models/blog');

router.post('/new-blog', (req, res) => {
    const blog = new Blog({
        image: req.body.img,
        date: moment().format("LL"),
        summary: req.body.summary,
        body: req.body.body,
        status: req.body.status,
        title: req.body.title
    });

    blog.save()
        .then( data => res.status(200).send(data) )
        .catch( err => res.status(400).json({
            msg: "There was an error saving Blog",
            solution: "Please try again",
            err
        }) )
})

router.post('/edit-blog', (req, res) => {
    Blog.findOneAndUpdate(
        {_id: req.body.id},
        req.body.changes
    )
        .then( doc => res.status(200).json({
            msg: "Blog has successfully been updates",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error while saving changes",
            solution: "Check your internet connection and try again",
            err
        }) )
})

module.exports = router;
