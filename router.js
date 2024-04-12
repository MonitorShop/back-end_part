const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    console.log("hello")
});

router.create("/", (req,res) =>{

});


module.exports = router;