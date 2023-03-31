const mongoose = require("mongoose");



const student  = mongoose.Schema({
    "status":{
          type: Boolean,

    },
    "user_id":{
        type: [Number,"format = 'userId_DOB'"],
        required:true,
        unique:false
   

    },
    "roll_no":{
        type: Number,
        required : true,
        unique: false
       
    }
})

const studentData = mongoose.model("StudentData", student);
module.exports = studentData;