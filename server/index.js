const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
// const data=require("./data.js")

const dbConnect = async () => {
    const uri = "mongodb://172.19.128.1:27017/admin";

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

// Call the function to establish the connection
dbConnect();

app.use(cors())


const chartSchema=mongoose.Schema({
    title:{
        type:String,
    },
    likelihood:{
        type:Number,
    },
    source:{
        type:String,
    },
    pestle:{
        type:String, 
    },
    relevance:{
        type:Number,
    },
    country:{
        type:String,
    },
    published:{
        type:String, 
    },
    added:{
        type:String, 
    },
    impact:{
        type:String, 
    },
    start_year:{
        type:String, 
    },
    end_year:{
        type:String, 
    },
    region:{
        type:String, 
    },
    url:{
        type:String, 
    },
    insight:{
        type:String, 
    },
    topic:{
        type:String, 
    },
    sector:{
        type:String, 
    },
    intensity:{
        type:Number, 
    },
})
//modal
const chart=mongoose.model("chart",chartSchema)

// send data
// const creatitem=async(data)=>{
//     try{
//      const res= await student.insertMany(data.module)
//         // const {data1} =data
      
//        console.log(res)  
        
//     // const student1=new student({
//     //     title:'monu',
//     //     author:"body"
//     // })
//     // const studentdata=await student.insertMany([student1])
//     }catch(err){
// console.log(err)
//     }
// }
// creatitem(data)
// read item
const readItem=async()=>{
    try{
        const res=await chart.find();
        console.log(res)
    
    }catch(err){
        console.log(err)
    }
}
// readItem()

// creat route
const route=express.Router();
route.get('/news',async(req,res)=>{
    try{
     const data= await chart.find({})
     console.log(data)
      res.status(200).json(data)
    }catch(err){
        res.status().json(500).json({message:data.message})
    }
})
app.use('/',route)

app.listen(5600,()=>{
    console.log("server is runing 5500")
})