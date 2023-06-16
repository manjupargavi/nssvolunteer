const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter activity name"],
        trim : true,
        maxLenght: [100,"Activity name can't exceed 100 characters"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required : true
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    location:{
        type:String,
        required:true
    },
    slots:{
        type: String,
        required:true
    },
    entry_fee:{
        type:String,
        required:true
    },
   
    contact:{
        type:Number,
        required:true
        
    }

    
})
let schema = mongoose.model("Activity",activitySchema)
module.exports=schema