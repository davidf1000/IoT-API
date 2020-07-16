//Module
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

const connectDB = require('./config/db');
connectDB();

// App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({extended:false}));
//Route
app.use('/api/sensor',require('./routes/api/sensor') );
app.use('/api/data',require('./routes/api/data') );

app.listen(process.env.PORT || 5000, function (req, res) {
  console.log("Running in Port 3000");
});

//MQTT 
function sensor(name)
{
  return client.options.username +'/f/'+name;
}
client.on('connect',()=>
{
  console.log("connected");
  
});
//Sementara test pakai 1 topic saja 
const topic="sensormqtt"
const topicroute=sensor(topic);
//Subs 
client.subscribe(topicroute, function (err) {
  if (!err) {
    // client.publish(topics, "123");
    console.log("Subscribe ke %s berhasil !",topic);
  }
});
//Wait new data arrives -> masukin ke database
client.on('message',(topicroute,msg)=>
{
  const d = new Date();
  const data = new dataModel({
    data: Number(msg.toString('utf-8')),
    sensor: topic,
  });
  data.save();
});

