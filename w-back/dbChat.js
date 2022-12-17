import mongoose from "mongoose";

const chatSchema=mongoose.Schema({
    message:String,
    timestamp:String,
    recieved:Boolean
})
export default mongoose.model("Chat",chatSchema);