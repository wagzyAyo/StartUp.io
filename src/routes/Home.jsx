import React, { useState, useRef, useEffect } from 'react';
import Hero from "../assets/hero.jpg.png";
import "./css/home.css";
import Fb from "../assets/fb.jpg.png";
import TwitterLogo from "../assets/twitter-logo.jpg.png";
import Tiktok from "../assets/tiktok-logo.jpg.png";
import ToolsImg from "../assets/tools and skills.png"
import Figma from "../assets/figma.jpg"
import Adode from "../assets/Adobe_XD.png"
import Photoshop from "../assets/photoshop.jpg.png"
import Map from "../assets/map.png";
import Micheal from "../assets/1.jpeg"
import Tom from "../assets/2.jpeg"
import Brown from "../assets/3.jpeg";
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


const Home = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);



  return (
    <>
      <div className='hero-section'>
        <div className='to-left'>
          <h2>Find and apply for your dream job with us now</h2>
          <p>If you're looking for a full-time job or internship, you've come to the right place! You can find a variety of opportunities here that can help you jumpstart your career. Good luck!</p>
          <div className='primary-cta'>
            <Link to="signup"> <button><span>Get started </span></button></Link>
          </div>
        </div>

        <div className='to-right'>
          <div className='background-circle'> </div>
          <div className='hero-image'>
            <img src={Hero} />
          </div>
        </div>
      </div>


      <div className='grid'>
        <div className='sub-tittle'> <h3>Latest jobs</h3></div>
        <div><h5>Find jobs that match your credentials</h5></div>
      </div>

      <div>

      </div>


      <div className='jobs'>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={Fb} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Product designer</p>

            </div>

            <div className='job-description'>
              <p>We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={TwitterLogo} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Front end developer</p>

            </div>

            <div className='job-description'>
              <p>We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={Tiktok} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Back end developer</p>

            </div>

            <div className='job-description'>
              <p> We are looking for an experienced Back-end developer to join our IT team. You will be responsible for the server side of our web applications See more <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={Fb} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Product designer</p>

            </div>

            <div className='job-description'>
              <p>We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={TwitterLogo} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Front end developer</p>

            </div>

            <div className='job-description'>
              <p>We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>
        <div className='frames'>
          <div className='jobs-frame'>


            <div className='top-content'>
              <img src={Tiktok} style={{ width: "32px", height: "33px" }} />
              <div className='job-type-bkg'>
                <p> Full time </p>
              </div>

              <div className='minute'>2 mins ago</div>

            </div>


            <div className='job-title'>
              <p>Back end developer</p>

            </div>

            <div className='job-description'>
              <p> We are looking for an experienced Back-end developer to join our IT team. You will be responsible for the server side of our web applications See more <span>see more </span></p>

            </div>

            <div className='apply-button'>
              <div className='sec-cta2'>
                <button>Apply now</button>
              </div>

            </div>



          </div>



        </div>

      </div>






      <div className='tools-skills'>
        <div className='left-tools'>
          <div className='background-tools'>
            <img src={ToolsImg} style={{ width: "236px", height: "294px", marginLeft: "230.5px" }} />
            <div className='skill-set-bord'>
              <p>Tools and skills</p>
              <div className='logos'>
                <img src={Figma} style={{ width: "36px", height: "33px" }} />
                <img src={Photoshop} style={{ width: "39px", height: "36px" }} />
                <img src={Adode} style={{ width: "20px", height: "21px" }} />
              </div>
            </div>
          </div>


        </div>


        <div className='right-tools'>
          <div className='content'>
            <h4>Create free account and start applying for your
              dream job</h4>
            <p>Sign up for free and start applying for your dream job now! Don't wait any longer to make your dreams come true.          </p>
          </div>
          <div className='content'>
            <h4>Find full time and Internship role</h4>
            <p>If you're looking for a full-time job or internship, you've come to the right place! You can find a variety of opportunities here that can help you jumpstart your career. Good luck!        </p>
          </div>
          <div className='content'>
            <h4>Explore job roles</h4>
            <p>If you're looking for something new, why not check out what's out there? There are tons of opportunities out there, so take the time to explore what's available. You never know what you might find!        </p>
          </div>

        </div>

      </div>



      <div className='global-talent'>
        <div className='left'>
          <h3>Get world best talent from over 150+ countries in one place</h3>
          <p>If you're looking for the best talent from around the world, look no further! We've got over 150 countries represented, so you're sure to find the perfect fit for your team.</p>
          <div className='sec-cta2'>
            <button>Employ talent</button>
          </div>



        </div>

        <div className='right'>
          <img src={Map} />
        </div>

      </div>


      <div className="testimonials">
        <h3>Dont take our word for it listen to our job seekers</h3>
        <h5>Our job seekers said</h5>
      </div>
      <motion.div ref={carousel} className='carousel'>
        <motion.div drag="x" dragConstraints={{ right: 0, left: - width, overflowX: "scroll" }} className='slide'>
          <div className='card-slides'>
            <p> “If you're looking for the best talent from around the world, look no further! We've got over 150 countries represented, so you're sure to find the perfect fit for your team.”
            </p>
            <div className='user-info'>
              <img src={Micheal} style={{ width: "78px", height: "51px" }} />
              <div className='user-pro'>
                <h5>Micheal oliva </h5>
                <p>Ui /Ux designer <span> Apple.inc </span></p>

              </div>

            </div>

          </div>



          <div className='card-slides'>
            <p> “If you're looking for the best talent from around the world, look no further! We've got over 150 countries represented, so you're sure to find the perfect fit for your team.”
            </p>
            <div className='user-info'>
              <img src={Tom} style={{ width: "78px", height: "51px" }} />
              <div className='user-pro'>
                <h5>Tom Chris </h5>
                <p>Ui /Ux designer <span> Facebook </span></p>

              </div>

            </div>

          </div>


          <div className='card-slides'>
            <p> “If you're looking for the best talent from around the world, look no further! We've got over 150 countries represented, so you're sure to find the perfect fit for your team.”
            </p>
            <div className='user-info'>
              <img src={Brown} style={{ width: "78px", height: "51px", }} />
              <div className='user-pro'>
                <h5>Brown Abi </h5>
                <p>Ui /Ux designer <span> Google </span></p>

              </div>

            </div>

          </div>


        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Home