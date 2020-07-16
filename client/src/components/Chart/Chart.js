import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../layout/Spinner';
const useStyles = makeStyles((theme)=>({
    container :{
        display: 'flex',
        justifyContent: "center",
        width: '70%',
    }
  }));
const Chart = ({option,dataPlot}) => {
  const [dataLabel,setDataLabel]=useState({});
  useEffect(() => {
    const call = async () =>{
      const label= {
        labels:(option!=='none'? dataPlot.map(data=>data.time).map(date=>{
          const x=new Date(date);
          const format=x.toDateString()+` ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`;
          return format;
        }).reverse():([])),
        datasets:[{
            data:( option!=='none'?dataPlot.map(data=>data.data).reverse() :([])),
            label: `${option}`,
            borderColor:'red',
            fill:true
        }]
    }
    setDataLabel(label);
    console.log(label);
    }
call();
  },[option,dataPlot])
  const classes = useStyles();
  const lineChart= (
     dataPlot!=='undefined'?(<Line 
        data={dataLabel} />) : null
  );
  return (
    <div className={classes.container}>
    {dataPlot!=='undefined'?lineChart:<Spinner />}
    </div>
  );
}; 

export default Chart;
