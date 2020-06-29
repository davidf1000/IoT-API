//Module
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const querystring = require('querystring');
const mqtt=require ('mqtt');
//Mqtt Preparation
const client = mqtt.connect('mqtt://io.adafruit.com',{
  username:'davidfauzi',
  password:'0f7873c4c7bf48bb95e79d4112889e8e'
});

//MongoDB
mongoose.connect("mongodb://localhost:27017/iotAPI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Schema
const dataSchema = new mongoose.Schema({
  data: String,
  Sensor: String,
  time: Number,
});
//Model
const dataModel = mongoose.model("sensordata", dataSchema);

// App
app.use(bodyParser.urlencoded({ extended: true }));

//Routing REST API
app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Running in Port 3000");
});

app.get("/", (req, res) => {
  res.send("Root Page!");
});
//Get all sensor data
app
  .route("/sensor")
  .get((req, res) => {
    dataModel.find((err, foundData) => {
      res.send(foundData);
    });
  })
  //post data
  .post((req, res) => {
    const d = new Date();
    const data = new dataModel({
      data: req.body.data,
      Sensor: req.body.sensor,
      time: d.getTime(),
    });
    data.save();
    res.send("POST Data Success !");
  })
  //Delete All data
  .delete((req, res) => {
    dataModel.deleteMany((err) => {
      if (!err) {
        res.send("Delete all data Success!");
      } else {
        res.send(err);
      }
    });
  });

//Routing tingkat 2
app
  .route("/sensor/:sensorname")
  .get((req, res) => {
    console.log(req.params.sensorname);
    dataModel.find({ Sensor: req.params.sensorname }, (err, foundData) => {
      if (foundData) {
        res.send(foundData);
        console.log("found");
        
      } else {
        res.send(err);
        console.log("not found");

      }
    });
  })
  .delete((req, res) => {
    dataModel.deleteMany({ Sensor: req.params.sensorname }, (err) => {
      if (!err) {
        res.send("Delete  data Success!");
      } else {
        res.send(err);
      }
    });
  });

//Latest Data only 
app
  .route("/sensor/:sensorname/la")
  .get((req, res) => {
    dataModel.findOne({ Sensor: req.params.sensorname })
    .sort('-time')  // give me the max
    .exec(function (err, data) {
        if(!err)
        {
            res.send(data);
        }
        else
        {
            res.send(err);
        }
      // your callback code
  
    });
  })
  .delete((req, res) => {
    dataModel.deleteOne({ Sensor: req.params.sensorname })
    .sort('-time')  // give me the max
    .exec(function (err, data) {
        if(!err)
        {
            res.send("Delete Latest Data Success !");
        }
        else
        {
            res.send(err);
        }
      // your callback code
    });
  });

// Get x latest data 
app
  .route("/sensor/:sensorname/lat")
  .get((req, res) => {
    console.log(req.query.num);
    dataModel.find({ Sensor: req.params.sensorname }).sort("-time").limit(parseInt(req.query.num))
    .exec((err, foundData) => {
      if (foundData) {
        res.send(foundData);
        console.log("found");
        
      } else {
        res.send(err);
        console.log("not found");

      }
    });
  })

//MQTT 
function sensor(name)
{
  return client.options.username +'/f/'+name;
}
client.on('connect',()=>
{
  console.log("connected");
  
});
// client.on('message',(topic,msg)=>
// {
//   console.log("Published");
//   console.log(topic);
//   console.log(msg);
//   console.log(msg.toString('utf-8'));
// });
// client.subscribe(sensor('TemperatureSensor'), function (err) {
//     if (!err) {
//       client.publish(sensor('TemperatureSensor'), "hello");
//     }
//   });


// const data = new dataModel({
//   data: "15",
//   Sensor: "ultrasonik",
//   time: 1593434002000,
// });
// data.save();
