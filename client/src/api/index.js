import axios from 'axios';


//Get Global Data
export const getAllData=async ()=>{
    try {
        const res = await axios.get(`/api/sensor/all`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

//Get x latest Data
export const getData=async (sensor,num)=>{
    try {
        const res = await axios.get(`/api/sensor/${sensor.trim()}/lat/${num}`);
        console.log("GET Successful");
        // console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

//Post Data 
export const postData=async (sensor,data)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ sensor, data });
    try {
        await axios.post('/api/sensor',body,config);
        console.log('Post Successfull');
    } catch (error) {
        console.log(error);
    }
}