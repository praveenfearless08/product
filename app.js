const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const studentData = require("./model/student");
const dataJSON = require("./data.json");
const { Query } = require("mongoose");
require("./db/connect")

connectDB();

app.use(express.json());
const port = process.env.PORT || 3000;
app.get("/", (req, res)=>{
    res.send("this is home page");
})


const start = async() =>{
     await studentData.deleteMany();
     try {
   
        const data = await studentData.create(dataJSON);
        console.log(data);
     } catch (error) {
        console.log(error);
     }
}
start();

app.get("/bfhl",async(req, res) =>{
     
    res.status(200).send(dataJSON);
})
app.post("/bfhl",(req, res) =>{
    const {roll_no, user_id, status} = req.body();
    const queryobj = {}
    if(roll_no){
        queryobj.roll_no = roll_no;
    }
    if(user_id){
        queryobj.roll_no = roll_no;
    }
    if(status){
        queryobj.status = status;
    }

    const datar = studentData.findOne(queryobj)
    res.status(201).send(datar);
    // const data = req.body();

    // const dataF = studentData.findOne(data);
    // res.status(200).send(dataF);



})

app.listen(port,() =>{
    console.log(`App is listening on port ${port}`);
})