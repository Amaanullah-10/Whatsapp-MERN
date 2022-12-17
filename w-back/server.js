import mongoose from "mongoose";
import cors from 'cors';
import express from "express";
import Chat from './dbChat.js';
import Pusher from "pusher";
//APP CONFIG
const app= express();
const port=process.env.PORT || 9090;

//MIDDLEWARE
app.use(express());
app.use(cors());

//DB CONFIG
const connection_port='mongodb+srv://Admin:elu7zqwOt2I8PTp9@cluster0.ww3jj8f.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connection_port,({
    useNewUrlParser: true,
    useUnifiedTopology: true,
}));
const db=mongoose.connection;
db.once('open',()=>{console.log('Db Connected')});


//API ENDPOINTS
app.get('/',(req,res)=>res.status(200).send('Hello World'));
app.post('/chat/new',(req,res)=>{
    const body=req.body;
    Chat.create(body,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})
app.get('/chat/sync',(req,res)=>{
    Chat.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
//LISTENERS
app.listen(port,()=>{`listening on port :${port}`});