import mongoose from "mongoose";    

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Mern_Stack_Hospital_Management_System"
    }).then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch((err)=>{
        console.log("Error in Database Connection",err);
    });
};