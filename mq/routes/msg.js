import {Router} from 'express';
let router = Router();
import {publishToQueue} from '../services/MQService';
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'user',
  password : 'pass',
  database : 'test'
});

router.post('/hello',async (req,res,next)=>{
    res.statusCode = 200;
    res.data = 'hello to you!';
    next();
});

router.post('/mysql',async(req,res,next)=>{
  let {msg} = req.body;

  await connection.query('INSERT INTO mq (msg,date) VALUES(?,?)', [msg.toString(),Date.now()]);

  console.log('MYSQL -->  ' + msg);
  res.statusCode = 200;
  res.data = {"message-sent":true};
  next();
})

router.post('/mq',async(req,res,next)=>{
    let {msg} = req.body;

    await publishToQueue('messages',msg);

    console.log('RABBIT MQ -->  ' + msg);
    res.statusCode = 200;
    res.data = {"message-sent":true};
    next();
})

export default router;