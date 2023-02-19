import {useState,useEffect} from 'react';
import "./counter.css";

function Counter(){
  const [time,setTime]= useState(0);
  const handleKeyDown= (event)=>{
    if(event.key== 'Enter'){
      const inputTime = Math.floor(event.target.value);
      if( isNaN(inputTime)){
        setTime(0);
      }
      else{
        setTime(inputTime)
      }
    }
  };
  useEffect(()=>{
    let interValid;
    if(time>0){
      interValid = setInterval(()=>{
        setTime((prevTime)=>prevTime -1);
      },1000);
    }else{
      setTime(0);
    }
    return()=> clearInterval(interValid);
  },[time])

  return(
    <div id="input">
      <h1>Count Down Timer</h1>
      <p>Enter countdown time</p>
      <input id="timecount" onKeyDown={handleKeyDown} placeholder="Enter a Value"/>
      <div id='current-time'>{time}</div>
    </div>
  );

}
export default Counter;
