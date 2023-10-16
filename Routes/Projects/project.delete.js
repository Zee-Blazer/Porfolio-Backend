const express = require("express");
const router = express.Router();

const { Project } = require("../../Models/project");

router.delete('/delete-project', (req, res) => {
    Project.deleteOne({ _id: req.body.id })
        .then( doc => res.status(200).json({
            msg: "Successfully deleted",
            doc
        }) )
        .catch( err => res.status(400).json({
            msg: "There was an error deleting project",
            solution: "Check your internet connection",
            err
        }) )
})

module.exports = router;
