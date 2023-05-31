import React from 'react'
import "./footer.css"
import Apple from "../assets/apple.jpg.png";
import Twitter from "../assets/twitter.jpg.png";
import Slack from "../assets/slack.jpg.png"
import Dribble from "../assets/dribble.jpg.png"






const footer = () => {
    return (
        <div className='footer-container'>
            <div className='brands'>
                <div >
                    <img className="apple" src={Apple} style={{ maxWidth: "45%" }} />
                </div>
                <div className="twitter">
                    <img src={Twitter} style={{ maxWidth: "45%" }} />
                </div>
                <div className="slack">
                    <img src={Slack} style={{ maxWidth: "40%", height: "auto" }} />
                </div>
                <div className="dribble">
                    <img src={Dribble} style={{ maxWidth: "40%", height: "auto" }} />
                </div>
            </div>

            <div className='footer-links'>
                <div className='about-tab'>
                    <h3>About</h3>
                    <p>Company</p>
                    <p>profile</p>
                    <p>Career</p>

                </div>
                <div className='resources-tab'>
                    <h3>Resources</h3>
                    <p>Contact</p>
                    <p>Authentication</p>

                </div>
                <div className='legal-tab'>
                    <h3>Legal</h3>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>

                </div>



            </div>

            <div className='footer-foot'>
                <p>Startup.io alright reserved (c) 2023</p>
            </div>




        </div>
    )
}

export default footer