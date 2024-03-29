import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

  const [inputs,setInputs] =useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const {loading,signup}  = useSignup();
  const handleCheckboxChange =(gender)=>{
    setInputs({...inputs,gender})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs);
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-60'> 
        <h1 className='text-3xl font-semibold text-center text-black'>
          Sign up <span className='text-blue-800 font-bold'>ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className='text-base label-text text-gray-900'>Full Name</span>
              </label>
              <input 
              type="text"
              placeholder='Your Name'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
            </div>

            <div>
            <label className="label p-2">
                <span className='text-base label-text text-gray-900'>Username</span>
              </label>
              <input 
              type="text"
              placeholder='Username'
              className='w-full input input-bordered h-10'
              value={inputs.userName}
              onChange={(e)=>setInputs({...inputs,userName:e.target.value})} />
            </div>

            <div>
            <label className='label'>
                <span className='text-base label-text text-gray-900'>Password</span>
              </label>
              <input 
              type="password"
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
            </div>

            <div>
            <label className='label'>
                <span className='text-base label-text text-gray-900'>Confirm Password</span>
              </label>
              <input 
              type="password"
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />
            </div>

            {/* GENDER CHECKBOX AN ACCOUNT */}

            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />
            <Link to="/login" 
            className='text-sm text-blue-950 mt-2 inline-block hover:underline hover:text-blue-600'>Already have an account?</Link>


            <div>
                 <button className='btn btn-block btn-sm mt--2 border border-slate-700' disabled = {loading}>
                  {loading ?<span className='loading loading-spinner'></span>:"Sign Up"}</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup