import React from 'react';
import { useState } from 'react';
import { InputNumber } from 'antd';
import styles from "./calc.module.css";
import Heading from '../../components/heading';
function Calculator() {
    const[water , swetWater] = useState(0);
    const[weight , setWeight] = useState(0);
    const[babyWeight , setbabyWeight] = useState(0);
    const[heartBeat , setHeartBeat] = useState(0);

    const calcWater = (value) => {
         swetWater(value*.03);
};
    const calcWeight = (value) => {
         setWeight(48+1.1*(value-150));
};
    const calcBabyWeight = (value) => {
        setbabyWeight((value*2)+8);
};
    const calcHeartBeat = (value) => {
        setHeartBeat(206.9 - (0.67*value));
};
  return (
    <div className='d-flex flex-column justify-content-center align-items-start '>
        <Heading text={"Health Calculator"}></Heading>
        <div className={`${styles.wrapper} w-50 m-auto d-flex gap-4 flex-wrap mb-4`}>
         <h5>Water Need</h5>
        <label className='mx-2'>enter your Weight</label>
         <InputNumber min={1} max={150} defaultValue={0} onChange={calcWater} />
        <p className='m-2 text-primary'>{water.toFixed(3)} Liters</p>
        </div>

        <div className={`${styles.wrapper} w-50 m-auto d-flex gap-4 flex-wrap mb-4`}>
         <h5>ideal Weight</h5>
        <label className='mx-2'>enter your Height</label>
         <InputNumber min={1} max={250} defaultValue={0} onChange={calcWeight} />
        { weight>0 ?  <p className='m-2 text-primary'>{weight.toFixed(3)} Kg</p> : <p className='m-2'>0</p> }
        </div>
        <div className={`${styles.wrapper} w-50 m-auto d-flex gap-4 flex-wrap mb-4`}>
         <h5>baby Weight</h5>
        <label className='mx-2'>baby age under 6 years</label>
         <InputNumber min={1} max={6} defaultValue={0} onChange={calcBabyWeight} />
        { babyWeight > 8  ?  <p className='m-2 text-primary'>{babyWeight.toFixed(3)}Kg</p> : <p className='m-2'>0</p> }
        </div>
        <div className={`${styles.wrapper} w-50 m-auto d-flex gap-4 flex-wrap m-4`}>
         <h5>exercise Heart Beat</h5>
        <label className='mx-2'>enter your Age</label>
         <InputNumber min={1} max={100} defaultValue={0} onChange={calcHeartBeat} />
        { heartBeat > 0 ?  <p className='m-2 text-primary'>{heartBeat.toFixed(3)} heart rate</p> : <p className='m-2'>0</p> }
        </div>
     </div>
  )
}

export default Calculator