import React from 'react'
import { Home, Login, Signup } from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Navigate to="/login"/>} />
        <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>} />
        <Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>} />

      </Routes>
      <Toaster/>

      {/* check Socketcontext  */}
    </div>
  )
}

export default App