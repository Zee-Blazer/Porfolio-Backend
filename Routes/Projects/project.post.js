const express = require("express");
const router = express.Router();

const { Project } = require("../../Models/project");

router.post('/new-project', (req, res) => {
    const project = new Project(req.body)
    project.save()
        .then( doc => res.status(200).json({
            msg: "Project successfully sent!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error sending message",
            solution: "Please try again",
            err
        }) );
})

router.post('/edit-project', (req, res) => {
    Project.findOneAndUpdate(
        { _id: req.body.id },
        req.body.changes
    )
        .then( doc => res.status(200).json({
            msg: "Editted Successfully!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error editing",
            solution: "Please try again",
            err
        }) )
})

module.exports = router;
