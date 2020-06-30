const mqtt=require ('mqtt');
const client = mqtt.connect('mqtt://io.adafruit.com',{
  username:'davidfauzi',
  password:'0f7873c4c7bf48bb95e79d4112889e8e'
});
function sensor(name)
{
  return client.options.username +'/f/'+name;
}
const topic=sensor('xsens');

client.on('connect',()=>
{
  console.log("connected");
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish(topic, "123");
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

function subscribeAndListen(top)
{
  const topics=sensor(top);
  client.subscribe(topics, function (err) {
    if (!err) {
      client.publish(topics, "123");
    }
  });
  client.on('message',(topic,msg)=>
{
  console.log("Published");
  console.log(topics);
  console.log(msg);
  console.log(msg.toString('utf-8'));
});
}
subscribeAndListen("senss");