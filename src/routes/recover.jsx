import React from 'react'
import Cover from "../assets/cover.jpg"
import { Link } from 'react-router-dom'

const recover = () => {
    return (
        <div className='sign up' style={{ backgroundImage: `url(${Cover})`, width: "100vw", height: "900px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="signup-box">
                <div className="sign">
                    <h2>Recover password</h2>
                    <p>Dont have an account ?<Link to="/signup" style={{ textDecoration: "none" }}><span> sign up </span></Link> </p>
                </div>
                <form className='form'>
                    <label>Email address</label>
                    <input type="email"></input>
                </form>


                <form className='form'>
                    <div className='primary-cta2'>
                        <button><span>Recover </span></button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default recover