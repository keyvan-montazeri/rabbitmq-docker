var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqp://user:bitnami@rabbitmq';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'user',
  password : 'pass',
  database : 'test'
});

amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, ch) {
        ch.consume('messages', function (msg) {
                  connection.query('INSERT INTO mq (msg,date) VALUES(?,?)', [msg.content.toString(),Date.now()]);
                  ch.ack(msg);
                  console.log('MQ Worker -- ADDED');
            },{ noAck: false }
        );
    });
});