import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await signUp(email, password);
        navigate('/')
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }



  return (
    <div className=' w-full h-[800px] w-min-full text-white flex justify-center items-center bg-black/60 '>
    <img className=' sm:block  w-full h-full object-cover' src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='bg-poster' />
    
    
    <div className='absolute w-[400px] h-[460px] bg-black/70 sm:w-[600px] sm:h-[500px] border-[2px] rounded-xl border-gray-500 shadow-lg shadow-gray-700 flex justify-center items-center'>
    
        
        <form onSubmit={handleSubmit} className='relative text-black '>
        <h1 className='title text-white text-center text-4xl translate-y-[-40px] '>Sign Up</h1>
        {error ? <p className='p-3 bg-blue-400 '>{error}</p> : null}
        <h2 className='text-center text-white p-2 text-xl'>Email:</h2>
            <input onChange={(e) => setEmail(e.target.value)} className='w-[300px] border rounded-full p-1 bg-gray-300' type='text' placeholder='Email...' />
            <h2 className='text-center text-white p-2 text-xl'>Password:</h2>
            <input onChange={(e) => setPassword(e.target.value)} className='w-[300px] border rounded-full p-1 bg-gray-300' type='password' placeholder='Password...' />
<br />
            <button className='text-white border rounded-xl w-[150px] h-[50px] translate-x-20 translate-y-[30px] p-1 text-center hover:bg-white hover:text-red-600'>Submit</button>
            <br />
            <br />
            <br />
            <br />
            <h4 className='text-white text-center text-lg'>Already a member? <Link className='' to='/signin'><span className='hover:text-blue-600'>Sign In</span></Link></h4>
        </form>
    </div>

</div>
  )
}

export default SignUp