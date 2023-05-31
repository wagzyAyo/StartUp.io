import React from 'react'
import Cover from "../assets/cover.jpg"
import "./css/signup.css"
import Apple from "../assets/apple.jpg.png"
import Google from "../assets/google.png"
import Facebook from "../assets/fb.jpg.png"
import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <div className='sign up' style={{ backgroundImage: `url(${Cover})`, width: "100vw", height: "900px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="signup-box">
        <div className="sign">
          <h2>Sign Up</h2>
          <p>Already have an account ?<Link to="/login" style={{ textDecoration: "none" }}><span> sign in </span></Link> </p>
        </div>
        <form className='form'>
          <label>Email address</label>
          <input type="email"></input>
        </form>
        <form className='form'>
          <label>Password</label>
          <input type="password"></input>
        </form>
        <form className='form'>
          <label>Confirm password</label>
          <input type="password"></input>
          <div className='primary-cta2'>
            <button><span>Sign up </span></button>
          </div>
        </form>
        <div className='alternative'>
          <div className='line'></div><p> Or </p><div className='line'></div>
        </div>
        <div className='continue'><h2>Continue with</h2></div>
        <div className='logos'>
          <img src={Apple} style={{ width: "25px", height: "35px" }} />
          <img src={Google} style={{ width: "38px", height: "38px" }} />
          <img src={Facebook} style={{ width: "30px", height: "30px" }} />
        </div>

        <div className='foot'>
          <p>Get help signing up</p>
        </div>

      </div>
    </div>
  )
}

export default signup