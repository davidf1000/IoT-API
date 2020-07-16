import React,{Fragment,useState,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../Chart/Chart';
import Picker from '../Picker/Picker';
import Input from '../Input/Input';
import {getData} from '../../api/index';
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
    margintop:{
      marginTop:"15px"
    },
    marginbot:{
      marginBottom:"20px"
    },
  }));
const Main = () => {
    const classes = useStyles();
    const [dataPlot,setDataPlot]=useState([]);
    const [option,setOption]=useState('none');

    useEffect(() => {
      const call= async () =>
      {
        const res2=await getData(option,8);
        await setDataPlot(res2);
      }
      call();
    })
    const handleChanged= async(opt) =>{
      console.log(opt);
      setOption(opt);
      const res=await getData(opt,8);
      setDataPlot(res);
    }
    // getTheData();
    return (
        <Fragment>
        <div className={classes.container}>
      <Typography variant="h1" className={classes.marginbot} >
        Plot Your Data
      </Typography>
      <Picker  changed={handleChanged} />
      <Chart option={option}  dataPlot={dataPlot}/>
      <Typography variant="h4" gutterBottom className={classes.margintop} >
        Post your data
      </Typography>
      <Input />
        </div>

      </Fragment>
    )
}

export default Main;