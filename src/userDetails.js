const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
    {
            fname:String,
            lname:String,
            email:String,
            newpassword:String,
            confirmpassword:String 
        },
        {
            collection:"UserInfo",
        }
);

mongoose.model("UserInfo", UserDetailsSchema)