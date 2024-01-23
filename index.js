import express  from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from 'body-parser'

const app=express()
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
//middlewere

//database connection
const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vignesh07$",
    database:"product"
})
db.connect((err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("successfully connected")
    }
})
