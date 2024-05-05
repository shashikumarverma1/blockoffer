import express from "express";
import { chart } from "../schema/chart";
const data=require("./data.json")
``
const route=express.Router();

route.get('/findChart',async(req,res)=>{
    try{
     const data= await chart.find({})
     console.log(data)
      res.status(200).json(data)
    }catch(err){
        res.status().json(500).json({message:err.message})
    }
})

route.post('/addChart',async(req,res)=>{
    try{
        const res= await chart.insertMany(data)
          console.log(res)  
       }catch(err){
   console.log(err)
       }
})