
const mongoose=require("mongoose")

 export const dbConnect=async()=>{
    const uri="mongodb://localhost:27017"
    try{
     await mongoose.connect(uri)
     console.log('db conected')
    //  console.log(data)
    }catch(err){
        console.log(err)

    }
}