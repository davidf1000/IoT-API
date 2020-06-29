const mqtt=require ('mqtt');
const client = mqtt.connect('mqtt://io.adafruit.com',{
  username:'davidfauzi',
  password:'0f7873c4c7bf48bb95e79d4112889e8e'
});
function sensor(name)
{
  return client.options.username +'/f/'+name;
}

client.on('connect',()=>
{
  console.log("connected");
  client.subscribe(sensor('TemperatureSensor'), function (err) {
    if (!err) {
      client.publish(sensor('TemperatureSensor'), "hello");
    }
  });
});

client.on('message',(topic,msg)=>
{
  console.log("Published");
  console.log(topic);
  console.log(msg);
  console.log(msg.toString('utf-8'));
});