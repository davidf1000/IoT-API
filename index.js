const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/restapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Schema
const dataSchema = new mongoose.Schema({ 
    id : String,
    data: Number,
    sensor:String
  });


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/",function(req,res){
//     res.send("DONE");

// });

// Model

const dataModel=mongoose.model("data",dataSchema);
app.get("/",(req,res)=>{
    res.send("Home page!");
})

app.get("/data",(req,res)=>{
    dataModel.find((err,foundData)=>{
        res.send(foundData);
    })
})

app.post("/data",(req,res)=>{
    // console.log(req.body.data);
    // console.log(req.body.id);
    // console.log(req);
    const data=new dataModel({
        id:req.body.data,
        data:req.body.id,
        sensor:req.body.sensor
    });
    data.save();
    res.send("Success !");
})
app.delete("/data",(req,res)=>
{
    dataModel.deleteMany((err)=>{
        if(!err)
        {
            res.send("Delete all data Success!");
        }
        else
        {
            res.send(err);
        }
    });
})

app.route("/data/:sensor")
.get((req,res)=>{
    console.log(req.params.sensor);
    dataModel.findOne({"sensor":req.params.sensor},(err,foundData)=>{
        if(foundData)
        {
            console.log("Data Found !");
            console.log(foundData);
            res.send(foundData);
        }
        else
        {
            console.log("not found");
            res.send(err);
        }
    });
}).
put((req,res)=>{
    dataModel.update(
        {"sensor":req.params.sensor},
        {
            sensor:req.body.sensor,
            data:req.body.data,
            id:req.body.id
        },
        {
            overwrite:true
        },
        (err)=>
        {
            if(!err)
            {
                res.send("Successfully update article");
            }
            else
            {
                res.send("Error Occurred! ");
            }
        }
    )
})
.patch((req,res)=>{
    dataModel.update(
        {"sensor":req.params.sensor},
        {
                $set:req.body
        },
        (err)=>
        {
            if(!err)
            {
                res.send("Successfully update article");
            }
            else
            {
                res.send("Error Occurred! ");
            }
        }
    )
})
.delete((req,res)=>{
    dataModel.deleteOne({"sensor":req.params.sensor},(err)=>{
        if(!err)
        {
            res.send("Delete  data Success!");
        }
        else
        {
            res.send(err);
        }
    });
});

app.listen(process.env.PORT||3000,function(req,res){
console.log("Running in Port 3000");
});

// const data=new dataModel({
//     id:"123523",
//     data:-3.2
// });
// data.save();
