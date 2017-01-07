var express = require('express');
var router = express.Router();

/* POST IsSaved. */
router.post('/IsSaved', function (req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'IsSaved',
      uid: uid,
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
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
  uid = req.body.uniqueId;
  nt = req.body.applicantAccountName;
  id = req.body.formId;
  console.log(nt);
  if (uid != undefined && nt != undefined && id != undefined) {
    db.Entry.update({
      itsr_status: 'OnUserSubmitted',
      uid: uid,
      itsrNO: id
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

/* POST OnUserTerminated. */
router.post('/OnUserTerminated', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'OnUserTerminated',
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

/* POST OnMgrApproved. */
router.post('/OnMgrApproved', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'OnMgrApproved',
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

/* POST OnMgrApproved. */
router.post('/OnMgrRejected', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'OnMgrRejected',
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

/* POST IsRejected. */
router.post('/IsRejected', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  console.log(uid);
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'IsRejected',
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

/* POST IsFinished. */
router.post('/IsFinished', function(req, res) {
  console.log(req.body);
  // console.log(req.query.UID);
  var uid;
  uid = req.body.uniqueId;
  if (uid != undefined) {
    db.Entry.update({
      itsr_status: 'IsFinished',
      }, {
        where: {
          uid: uid
        }
      }).then(function(result){
        console.log(result);
        res.status(200).send(true);
    });
  }else {
    res.status(200).send(false);
  }
});

module.exports = router;
