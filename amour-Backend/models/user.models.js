import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({

    fullName : {
        type : String,
        required : [true, "Fullname is required"]
    },
    username : {
        type : String,
        unique : true,
        lowercase : true,
        trim : true,
        required : [true, "Username is required"]
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        trim : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)