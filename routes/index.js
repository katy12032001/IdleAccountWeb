var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.uid);
  res.render('index', { uid: req.query.uid });
});

/* GET feedback page. */
router.get('/feedback/:uid', function(req, res, next) {
  res.render('feedback', { uid: req.params.uid });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  console.log(req.query.uid);
  res.render('index', { uid: req.query.uid });
});

module.exports = router;
