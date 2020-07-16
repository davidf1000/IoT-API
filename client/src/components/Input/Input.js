import React,{Fragment,useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {postData} from '../../api/index'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '25ch',
      },
    },
    each:{
        margin:"10px"
    },
    button:{
        margin:'15px'
    }
  }));
const Input = () => {
    const classes = useStyles();
    const [data,setData]=useState({
      sensor:'',
      data:''
    })
    useEffect(()=>{
    },[])

    const onChangeA = (e) =>{
      console.log(e);
      setData({ ...data, sensor:e.target.value });
    }
    const onChangeB = (e) =>{
      console.log(e);
      setData({ ...data, data:e.target.value });
    }
    return (
        <Fragment>
        <div>
            <TextField id="filled-basic" label="Sensor Name" variant="filled" className={classes.each} value={data.sensor} onChange={(e) =>onChangeA(e)}/>
            <TextField id="filled-basic" label="Value" variant="filled" className={classes.each} value={data.data} onChange={(e) =>onChangeB(e)}/>
        </div>
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>{
          postData(data.sensor,data.data);
          setData({sensor:'',data:''})}} >
        POST
      </Button>
      </Fragment>
    )
}
export default Input;