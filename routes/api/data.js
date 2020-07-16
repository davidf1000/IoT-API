const express = require('express');
const DataSensor = require('../../Schema/DataSensor');
const router = express.Router();
// @route     GET api/sensor
// @desc       Get All Data Sensor 
// @access      Public


router.get('/',async (req, res) => {
    try{
        data= await DataSensor.find({});
        res.json(data);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error ! ');
    }
});

module.exports = router;

