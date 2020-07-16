import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 800,
  },
});
const GetStarted = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom align="center">
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
          {"> Dependency"}
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
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Dependency
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="h4" gutterBottom>
        API Calls
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Future Improvement
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>


      <Typography variant="subtitle2" gutterBottom>
        Will Used for codes
      </Typography>
    </div>
  );
};
export default GetStarted;
