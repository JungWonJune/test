var express = require('express');
var router = express.Router();

/* pps charge result */
router.get('/api/autocharge', function(req, res, next) {

  var result = {
    result:"1000",
    desc:"1000"
  }

  res.json(result);
});

module.exports = router;
