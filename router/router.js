const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).json({
        message: "GET -SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.post("/", (req,res)=>{
    res.status(200).json({
        message: "POST -SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//localhost:3000/23
router.get("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'GET - SUCCESS',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
})

router.patch("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'PATCH - SUCCESS',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
})

router.delete("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'DELETE - SUCCESS',
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
})
module.exports = router