import React, { useEffect, useRef, useState } from 'react'

const Form = () => {

    const data={name:"",email:"",password:""};
    const [inputData,setInputData]=useState(data);
    const [flag,setFlag]=useState(false);
    const inputRef=useRef(null);

    useEffect(()=>{
        console.log("Registered Successfully");
    },[flag])

    const handleChange = (e) =>{
        setInputData({...inputData ,[e.target.name]:e.target.value});
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields are Mandatory ..");
        }
        else{
            setFlag(true);
            inputRef.current.focus();
        }
    }

  return (
    <>
        <pre className='pretag'>
            {(flag)? <h2>Hello {inputData.name},you have successfully registered</h2>:""}
        </pre>
        <form className='container' onSubmit={handleSubmit}>
            <h1 className='h1'>Registration Form</h1>
            <div>
            <div className='box'>
                <label className='tag'>
                    Name : 
                </label><br/>
                <input type='text' placeholder='Enter your Name'
                value={inputData.name}
                name='name'
                ref={inputRef}
                onChange={handleChange}
                />
            </div>
            <div className='box'>
                <label className='tag'>
                    Email : 
                </label><br/>
                <input type='text' placeholder='Enter your Email'
                value={inputData.email}
                name='email'
                onChange={handleChange}
                />
            </div>
            <div className='box'>
                <label className='tag'>
                    Password :
                </label><br/>
                <input type='text' placeholder='Enter your Password'
                value={inputData.password}
                name='password'
                onChange={handleChange}
                />
            </div>
            <button className='btn'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Form
