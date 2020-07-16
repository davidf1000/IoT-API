import React,{Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
        padding: theme.spacing(3),
        position:'absolute',
        bottom:0
      }
  }));

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}

        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();

    return (
        <Fragment>
            
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Iot API
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Created by David Fauzi
        </Typography>
        <Copyright />
      </footer>
        </Fragment>
    )
}

export default Footer;