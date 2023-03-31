const mongoose = require("mongoose");
const uri = "mongodb+srv://praveen2408:praveen@cluster0.emyokxy.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async() =>{


const c = await mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);
console.log("connected")
}

module.exports = connectDB;
