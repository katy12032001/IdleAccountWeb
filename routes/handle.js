var express = require('express');
var router = express.Router();
var db = require('../models/entry');

router.post('/datasummit', function (req, res) {
    console.log(req.body.uidno);
    console.log(req.body.accountlist);
    userList = req.body.accountlist;
    userIndex = Object.keys(userList);
    var result = [];
    for (var i = 0; i < userIndex.length; i++) {
      // db.Entry.build({
      //       itsrNO: req.body.itsrno,
      //       account: userList[userIndex[i]],
      //       number: userIndex[i],
      //       itsr_status: 'DataSummit',
      //       date: new Date().toDateString(),
      //       handle_status: 'NO'})
      //       .save();

      result.push({
            uid: req.body.uidno,
            account: userList[userIndex[i]],
            number: userIndex[i],
            itsr_status: 'DataSummit',
            date: new Date().toDateString(),
            handle_status: 'NO'});
    }
    db.Entry.bulkCreate(result).then(function(result){
      itsrno = req.body.itsrno;
      var re = {};
      re[itsrno] = 'Success';
      console.log(re)
      res.status(200).json(re);
    });

  });

  router.post('/datacheck', function (req, res) {
      console.log(req.body.itsrno);
      db.Entry.findAll({
        where: {
          uid: req.body.uidno
        }
      }).then(function(result){
        var bresult = {};
        for (var i = 0; i < result.length; i++) {
          bresult[i] = result[i].dataValues;
        }
        console.log(bresult);
        res.status(200).json(bresult);

      });
  });

  router.post('/dataupdate', function (req, res) {
      console.log(req.body.itsrno);
      db.Entry.update({
        itsr_status: req.body.status,
        }, {
          where: {
            itsrNO: req.body.itsrno
          }
        }).then(function(result){
          console.log(result);
          res.status(200).json(result);
      });
  });

module.exports = router;
