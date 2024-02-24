import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-60'> 
        <h1 className='text-3xl font-semibold text-center text-black'>
          Sign up <span className='text-blue-800 font-bold'>ChatApp</span>
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className='text-base label-text text-gray-900'>Full Name</span>
              </label>
              <input 
              type="text"
              placeholder='Your Name'
              className='w-full input input-bordered h-10' />
            </div>

            <div>
            <label className="label p-2">
                <span className='text-base label-text text-gray-900'>Username</span>
              </label>
              <input 
              type="text"
              placeholder='Username'
              className='w-full input input-bordered h-10' />
            </div>

            <div>
            <label className='label'>
                <span className='text-base label-text text-gray-900'>Password</span>
              </label>
              <input 
              type="password"
              placeholder='Enter Password'
              className='w-full input input-bordered h-10' />
            </div>

            <div>
            <label className='label'>
                <span className='text-base label-text text-gray-900'>Confirm Password</span>
              </label>
              <input 
              type="password"
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10' />
            </div>

            {/* GENDER CHECKBOX AN ACCOUNT */}
            <GenderCheckbox/>
            <a href="#"
            className='text-sm text-blue-950 mt-2 inline-block hover:underline hover:text-blue-600'>Already have an account?</a>


            <div>
                 <button className='btn btn-block btn-sm mt--2 border border-slate-700'>Sign Up</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup