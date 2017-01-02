var express = require('express');
var router = express.Router();

/* POST IsSaved. */
router.post('/IsSaved', function (req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.UID;
  if (uid != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

/* POST OnUserSubmitted. */
router.post('/OnUserSubmitted', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  var nt;
  var id;
  uid = req.body.UID;
  nt = req.body["Applicant account name"];
  id = req.body.formId;
  console.log(nt);
  if (uid != undefined && nt != undefined && id != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

/* POST OnUserTerminated. */
router.post('/OnUserTerminated', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.UID;
  if (uid != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

/* POST OnMgrApproved. */
router.post('/OnMgrApproved', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.UID;
  if (uid != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

/* POST IsRejected. */
router.post('/IsRejected', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.UID;
  if (uid != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

/* POST IsFinished. */
router.post('/IsFinished', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.UID;
  if (uid != undefined) {
    res.status(200).send(true);
  }else {
    res.status(200).send(false);
  }
});

module.exports = router;
