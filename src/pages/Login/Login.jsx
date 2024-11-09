import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [userid,setUserid]=useState(false);
 const ifuserid= function(){
  console.log('hi')
  console.log(userid)
    if(userid){
      setUserid(false)
    }
    else{
      setUserid(true)
    }}
  return (
    <div className='main_container'>
    <div className='login_box'>

      <div className='login_left'>
        <h1 className='brand_name'>Ashney.Co</h1>
        <p>Welecome to our community ❤️</p>
      </div>
      <div className='login_container'>
        <div><h2 className='login_name'>{userid?<>Sign In here...</>:<>Login Here...</>}</h2></div>
        <div className='email'>
          <label htmlFor="">Enter Your Email id</label>
          <input type="email" name="" id="" placeholder='Type here'/>
        </div>
        <div className='password'>
          <label htmlFor="">Enter Your Password</label>
          <input type="password" name="" id="" placeholder='Type here'/>
        </div>
        <div className='remember'>
          <input type="checkbox" name="" id="" />
          <p>Remember me</p>
        </div>
        <div className='login_button'>
          <button>LOGIN</button>
        </div>
        <div className='signup_dets'>
          <p>{userid?<>Old user? <span onClick={ifuserid}>LOGIN</span></>:<>New user? <span onClick={ifuserid}>SIGN UP</span></>}</p>
          <p>Forgot your password?</p>
        </div>
      </div>

      
    </div>

    </div>
  )
}

export default Login