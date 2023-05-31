import React from 'react'
import Profile from "../assets/profile.jpeg"
import Mail from '@mui/icons-material/MailOutline';
import Location from '@mui/icons-material/LocationOn';
import Work from '@mui/icons-material/WorkOutline';
import "./css/profile.css";
import Footer from "../components/footer"

const profile = () => {
  return (
    <React.Fragment>
      <div className="profile-flex">
        <div className='Profile-left'>
          <div>
            <img src={Profile} style={{ width: "183px", height: "128px" }} />
            <h2>Robin Harington</h2>
            <p className='p'>Front end developer</p>
          </div>

          <div className='user-flex'>
            <div className='icon'><Mail style={{ width: "24px", height: "20px", display: "flex", alignItems: "center" }} /></div>
            <div> <p>Robhari24@gmail.com</p> </div>
          </div>
          <div className='line'></div>
          <div className='user-flex'>
            <div className='icon'><Location style={{ width: "24px", height: "20px", display: "flex", alignItems: "center" }} /></div>
            <div> <p>LosAngeles,CA</p> </div>
          </div>
          <div className='line'></div>
          <div className='user-flex'>
            <div className='icon'><Work style={{ width: "24px", height: "20px", display: "flex", alignItems: "center" }} /></div>
            <div> <p>Full time</p> </div>

          </div>
          <div className='line'></div>


          <div className='primary-cta'>
            <button><span>Update resume </span></button>
          </div>

          <div className='sec-cta3'>
            <button>Download resume</button>
          </div>





        </div>




        <div className='profile-right'>
          <h2>Professional summarry</h2>
          <p>Hey there! Let me tell you about my journey as a front end engineer. It all started when I was tinkering around with websites and realized I had a knack for coding. I dove headfirst into HTML and CSS and started building my own websites from scratch.

            As I got more experienced, I started learning JavaScript and jQuery to add some interactivity to my sites. Eventually, I decided to pursue it as a career and landed my first job as a junior front end developer.

            Since then, I've worked on a ton of different projects and honed my skills in React, Vue, and Angular. It's been a wild ride, but I love the challenge of building beautiful, functional websites that people love to use.</p>



          <div className='experience-flex' >
            <h2>Work Experience</h2>

            <div className='experience-layout'>

              <div className='experience-top'>
                <h4>Senior Front End Developer</h4>
                <div className='banner'>Full time</div>

              </div>


              <div className='job-detail'>
                <div className='job-location'>
                  <div className='icon'><Work style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Apple inc.</p>
                  <div className='icon'><Location style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Los Angeles, CA</p>

                </div>
                <div className='date'>May 2019 -</div>

              </div>
              <div className='line2'></div>
              <div className='experience-top'>
                <h4>Junior Front End Developer</h4>
                <div className='banner'>Full time</div>

              </div>


              <div className='job-detail'>
                <div className='job-location'>
                  <div className='icon'><Work style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Twitter</p>
                  <div className='icon'><Location style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Los Angeles, CA</p>

                </div>
                <div className='date'>January 2015 - April 2019</div>

              </div>
              <div className='line2'></div>

              <div className='experience-top'>
                <h4>Junior Front End Developer</h4>
                <div className='banner'>Intern</div>

              </div>

              <div className='job-detail'>
                <div className='job-location'>
                  <div className='icon'><Work style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Figma</p>
                  <div className='icon'><Location style={{ width: "24px", height: "20px", display: "flex", alignItems: "center", color: "#D9D9D9" }} /></div>
                  <p>Los Angeles, CA</p>

                </div>
                <div className='date'>January 2014 - April 2015</div>

              </div>
              <div className='line2'></div>


            </div>

          </div>

          <div className='education'>
            <h2>Education</h2>

            <div className='experience-top'>
              <h4>Masters in software engineering</h4>

            </div>

            <div className='job-detail'>
              <div className='job-location'>
                <p>Stanford University</p>

              </div>
              <div className='date'>May 2016 - August 2017</div>

            </div>
            <div className='line2'></div>
            <div className='experience-top'>
              <h4>Bachelors in software engineering</h4>

            </div>

            <div className='job-detail'>
              <div className='job-location'>
                <p>Stanford University</p>

              </div>
              <div className='date'>May 2012 - August 2015</div>

            </div>
            <div className='line2'></div>

          </div>

        </div>

      </div>



      <Footer />

    </React.Fragment>
  )
}

export default profile