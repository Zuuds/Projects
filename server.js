import express from 'express'
import mongoose from "mongoose"
import Cors from 'cors'
import Cars from './cars_schema.js'

var app = express()
var port = process.env.PORT || 8080 

app.use(express.json())
app.use(Cors())

var Connection_url = 'mongodb+srv://yashyerolkar:yashyerolkar@cluster0.d0sax.mongodb.net/db1?retryWrites=true&w=majority'

mongoose.connect(Connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


app.get("/", function (req, res){
    res.send( "Welcome to Tutorial of REST API using MongoDB, ExpressJS and NodeJS");
})

app.get("/Cars", function (req, res) {
    
    try {
        Cars.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
})

app.post("/Cars_add", function (req, res) {

    const dbfeed = req.body
    try {
        Cars.create(dbfeed, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
    } catch (error) {
        console.log(error);
    }
})



app.listen(port)