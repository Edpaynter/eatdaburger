var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", (req, res)=>{
    burger.all(data => {
        var hbsOject = {
            burgers: data
        };
        console.log(hbsOject)
        res.render("index", hbsOject)
    })
});


router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


module.exports = router;