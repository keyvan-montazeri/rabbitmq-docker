import express from 'express';
import bodyParser from 'body-parser';
import msg from './routes/msg';

let app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.status(200).send({
        status:true,
        response:'Hello World!'
    });
});

app.use('/api',msg);

app.use((req, res, next) => {
    if (!res.data) {
        return res.status(404).send({
            status: false,
            error: {
                reason: "Invalid Endpoint", 
                code: 404
            }
        });
    }

    res.status(res.statusCode || 200).send({ status: true, response: res.data });
})

app.listen(8000,()=>{
    console.log(' ********** : running on 8000');
})

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});


module.exports = app;