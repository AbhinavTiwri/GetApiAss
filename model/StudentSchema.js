import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    age:{type:Number, required:true, trim:true}
})

const StuModel = new mongoose.model("student", StudentSchema)

export default StuModel