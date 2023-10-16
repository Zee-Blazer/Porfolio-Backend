const express = require("express");
const router = express.Router();

const { Project } = require("../../Models/project");

router.get('/all-project', (req, res) => {
    Project.find()
        .then( doc => res.status(200).json({
            msg: "Data fetched successfully!!",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "Unable to fetch data",
            solution: "Please try again",
            err
        }) )
})

router.get('/specific-project/:id', (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then( doc => res.status(200).json({
            msg: "Data fetched successfully",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error fetching data",
            solution: "Please try again",
            err
        }) )
})

module.exports = router;
