import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {getAllData} from '../../api/index';

const useStyles = makeStyles((theme)=>({
  formControl: {
    justifyContent: 'center',
    marginBottom:'20px'
  },
  container:{
    width: '30%',
    justifyContent: 'center',
    marginBottom:'20px' 
  }
}));
const Picker = ({data,changed}) => {
  const [option,setOption]=useState([]);
  useEffect(()=>{
    const call = async () => {
      const res= await getAllData();
      setOption(res);
    }
    call();
  },[]);
  const styles= useStyles();
  console.log(option);
  return (
    <div >
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={e=>changed(e.target.value)}>
              <option value="none">None</option>
              {option.map(data=>data.sensor).filter((v, i, a) => a.indexOf(v) === i).map((item,i)=>(<option value={item} key={i}>{item}</option>))}
          </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Picker;
