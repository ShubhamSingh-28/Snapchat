

import mongoose, { Connection } from "mongoose";
let isConnected: Connection | boolean = false;

export const connectDB =async()=>{
    if (isConnected) {
        console.log("MongoDb already Connected");
        return isConnected
    }
    try {
      const res= await mongoose.connect(process.env.MONGODB_URI!)
      isConnected = new res.Connection;
        console.log("DB connected")
        return isConnected
    } catch (error) {
        console.log(error);
        throw error
    }
}