var Sequelize = require('sequelize');

var node_env = 'development';

var config = require('../config/config')[node_env];

console.log(config);

var dbStroage = new Sequelize(config.database, config.username, config.password, config.option);

db = {};

var Entry = dbStroage.define('entry', {
    itsrNO: Sequelize.STRING,
    account: Sequelize.STRING,
    number: Sequelize.STRING,
    itsr_status: Sequelize.STRING,
    date: Sequelize.STRING,
    handle_status: Sequelize.STRING
  });

db['Entry'] = Entry;

dbStroage.sync();

module.exports = db;
