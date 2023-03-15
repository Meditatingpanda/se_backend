import mongoose from "mongoose";
import  keys  from "../config/index.js";
const connectMongoDB = async () => {
      try {
       // console.log(keys.MONGO_URI)
        const res= await mongoose.connect(keys.MONGO_URI);
        console.log(`MongoDB connected: ${res.connection.host}`.bgRed);
        
      } catch (error) {
          console.log(error)
      }

}


export default connectMongoDB;