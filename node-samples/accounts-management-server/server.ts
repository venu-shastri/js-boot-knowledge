//web sever code 
// importing third party module (node_modules)
import express from 'express';
import { isParameter } from 'typescript';
import {AccountDataService} from './accountDataService'
import {UserDataMemoryRepository} from './userDataMemoryRepository'
import { User } from './userModel';
import bodyParser from 'body-parser'
import cors from 'cors';

import path from 'path' // node Js Built in module
const server=express();
const PORT=8003;

const accountServiceref=new AccountDataService(new UserDataMemoryRepository());

//Configure - middleware /filter

server.use(bodyParser.json());
server.use(cors());//middleware send responses for CORS Request


server.get("/index.html",(req,res)=>{

    res.sendFile(path.join(__dirname+'/index.html'));
});

//http get request - http://localhost:8003/teabreak
server.get("/teabreak",(req,res)=>{

    console.log("New Reuest Recived");
    res.send("Lets have tea break");


});

server.post("/accounts/register",(req,res)=>{


let userObj=new User(req.body.name,req.body.password,req.body.email);
let result=accountServiceref.register(req.body);
res.status(200).json({message:result});

})

server.post("/accounts/validate",(req,res)=>{

    let credentials=req.body;
    console.log(credentials);
    if(credentials){

        if(accountServiceref.validate(credentials.userName,credentials.password)){
            res.status(200).json({message:"Valid Credentials"});
        }
        else{
            res.status(403).json({message:"Invalid Credentials"});
        }
    }
    else{
       res.status(400).json({messgae:"Bad Request"});
    }

    

});


server.listen(PORT,()=>{

    console.log(`Account Management Server is running at http://localhost:${PORT}`);

});



