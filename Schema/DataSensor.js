const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    data: {type:Number,
    required:true},
    sensor: {type:String,
      required:true},
    time: {
        type:Date,
        default:Date.now
    }
  });   

module.exports = mongoose.model('iotsensor', dataSchema);
