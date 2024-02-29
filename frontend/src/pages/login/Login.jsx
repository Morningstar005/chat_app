import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

  // console.log(userName,password)

  const {login,loading}=useLogin();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log(username,password)
    await login(username, password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'>
        <h1 className='text-3xl text-center font-semibold text-black '>Login <span className='text-blue-800 font-bold'>ChatApp</span></h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-900'>Username</span>
            </label>
            <input type="text"
              className='w-full input input-bordered h-10 '
              placeholder='Enter Username'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-900'>Password</span>
            </label>
            <input type="password"
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
            value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          
          <Link to="/signup" className='text-sm text-blue-950 mt-2 inline-block hover:underline hover:text-blue-600'>
            {"don't"} have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {
                loading?<span className='loading loading-spinner'></span>:"Login"
              }
              </button>
          </div>


        </form>

      </div>

    </div>
  )
}

export default Login