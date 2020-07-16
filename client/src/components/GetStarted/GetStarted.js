import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 800,
  },
  content :{
    textAlign:"justify"
  }
});
const GetStarted = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        Docs.
      </Typography>
      <hr></hr>
      <hr></hr>
      <Typography variant="h4" gutterBottom>
        List of Contents
      </Typography>
      <ul>
        <li>
          {"> Introduction"}
          <Typography variant="body1"></Typography>
        </li>
        <li>
          {"> Modules and dependencies"}
          <Typography variant="body1"></Typography>
        </li>
        <li>
          {"> API Calls"}
          <Typography variant="body1"></Typography>
        </li>
        <li>
          {"> Future Improvement"}
          <Typography variant="body1"></Typography>
        </li>
      </ul>
      <Typography variant="h4" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.content}>
      IoT API is Webapp that is created to demonstrate simple Services for people to be able to implement their IoT application quickly and instantly, mainly for testing purpose.
      As you can see, there's already a lot of IoT services that offers simple data posting and dashboard to save and display their data in the form of graph such as AWS IoT or Azure IoT.
      With this webapp , you can instantly HTTP Post your data from your microcontroller such as nodeMcu or Nucleo directly onto the server. The server
      then takes the data and store it in the database. User can access and view the data via Line Graph. You can name your own
      sensor and see the flow of the data from your IoT devices in realtime from IoT API.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Modules and dependencies
      </Typography>
      <Typography variant="body1" gutterBottom>
      This Application uses various modules such as :
      <br /> <br />
      <ul>
        <li>
          - Axios to fetch data from backend via HTTP call 
        </li>
        <li>
          - material-ui for basic components like cards and features like grid system
        </li>
        <li>
          - css-modules for styling
        </li>
        <li>
          - chart.js for plotting 
        </li>
      </ul>
      </Typography>
      <Typography variant="h4" gutterBottom>
        API Calls
      </Typography>
      <Typography variant="body1" gutterBottom>
      To test the api you could HTTP POST your data with body of data:String and sensor:String from the route <br></br>
      <b>/api/post/sensor </b> <br></br>
      Or you could POST request test directly from the dashboard to test the application .<br />
      </Typography>
      <Typography variant="h4" gutterBottom>
        Future Improvement
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.content} >
      As you can see, this project is still in development process, hence the basic system and implementation for the app.
      In the future, i will try to create full-fledged version of IoT services with Register/Login system, authorization and encryption with middleware and token for
      IoT Device's end point route. Each User will also be able to have their own customizable dashboard and various widgest like gauge meter, button , terminal console, bar graph ,etc.
      </Typography>



    </div>
  );
};
export default GetStarted;
