var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify({ "api": "entry" }));
});

router.get('/:id', function (req, res, next) {
    res.send(JSON.stringify({ "param": req.params.id }));
});

module.exports = router;
