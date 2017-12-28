var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("positioning");
});

router.get("/positioning", function(req, res, next) {
    res.render("positioning");
});

router.get("/cards", function(req, res, next) {
    res.render("cards");
});

router.get("/full-height", function(req, res, next) {
    res.render("full-height");
});

router.get("/animations", function(req, res, next) {
    res.render("animations");
});

router.get("/colors", function(req, res, next) {
    res.render("colors");
});


module.exports = router;
