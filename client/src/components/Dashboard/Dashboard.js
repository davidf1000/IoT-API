import React,{Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../Chart/Chart';
import Footer from '../layout/Footer';
const useStyles = makeStyles((theme)=>({
    root: {
      width: '100%',
      maxWidth: 500,
      textAlign:"center"
    },
    container :{
        display: 'flex',
        alignItems:'center',
        justifyContent: "center",
        flexDirection: 'column',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        position:'absolute',
        bottom:0
      }
  }));
const Main = () => {
    const classes = useStyles();
    return (
        <Fragment>
        <div className={classes.container}>
      <Typography variant="h2" gutterBottom >
        Plot Your Data
      </Typography>
        <Chart />
        <Footer />
        </div>
      </Fragment>
    )
}

export default Main;