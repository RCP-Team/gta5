"use strict";

let mysql = module.exports;

console.log('Prepare mysql connect to base...');

var mysql2 = require('mysql');

mysql.connection = mysql2.createConnection({
    host     : 'strekayf1.beget.tech',
    user     : 'strekayf1_gta5',
    password : '&1MFUqs7',
    database : 'strekayf1_gta5'
});

mysql.connection.connect(function(err) {
	console.log(err);
    if(err) {
      console.log("Error connecting to the database...");
      throw err;
    } else {
      console.log('Database connected!');
      mysql.connection.query('UPDATE persons SET g_online = ?', [0], function (error, results, fields) {
        console.log(error);
        console.log('Online stats refresh!');
      });
    }
  });

console.log('Loaded mysql data...');

/*

setInterval(function() {
    mysql.connection.query('select 1', function(err, results) {

    });
}, 10000);

*/
