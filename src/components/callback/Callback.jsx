import React, { useState,useCallback } from 'react'
import Increment from './Increment';
import Button from './Button';
import Title from './Title';

export default function Callback() {
    const[age,setAge]=useState(20);
    const [salary,setSalary]=useState(20000);

    
    const incrementAge = useCallback(function (){
        setAge(age+1);
    },[age])

  
  const incrementSalary =  useCallback(function(){
        setSalary(salary+1000);
    },[salary])

   


  return (
    <div>
        <Title />
        <Increment text="age" value={age} />
        <Button action={incrementAge} >Increment Age</Button>

        <Increment text="salary" value={salary} />
        <Button action={incrementSalary} >Increment Salary</Button>
    </div>
  )
}

