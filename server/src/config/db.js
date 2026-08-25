import dns from "node:dns";
import mongoose from "mongoose"

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const mongoConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDB connected");
    } catch (error) {
        console.log("connection failed",error);
    }
}