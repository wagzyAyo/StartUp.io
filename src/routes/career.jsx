import React from 'react'
import Magnet from "../assets/magnet.jpg"
import "./css/career.css"
import StarIcon from '@mui/icons-material/Star';
import Footer from "../components/footer"


const career = () => {
  return (
    <React.Fragment>
      <div className='career-hero'>
        <div className='career-left'>
          <h2>Get Employers attention with expert resume help</h2>
          <p>Hey there! Want to make sure your resume catches the eye of your dream employer? We've got you covered! Our expert resume help will make sure your skills and experience shine on paper. Let's get started!</p>
          <div className='sec-cta3'>
            <button>Get resume help</button>
          </div>
        </div>

        <div className='career-right'>
          <img src={Magnet} style={{ width: "512px", height: "321px", flexShrink: "1" }} />

        </div>

      </div>

      <div className='stat-title'><h3>Over 20,000 resumes delivered </h3></div>


      <div className='flex-sides'>
        <div className='left-stat'>
          <div className='test-stats'>
            <p>“Exceeds my expectation...I cant say enough about how this process and this resume made my day”</p>
            <div className='icon-set'>
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />

            </div>
          </div>
          <div className='test-stats2'>
            <p>“Absolutely happy! This is above and beyond what i could have imagined”</p>
            <div className='icon-set'>
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />

            </div>
          </div>


          <div className='test-stats'>
            <p>“Exceeds my expectation...I cant say enough about how this process and this resume made my day”</p>
            <div className='icon-set'>
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />
              <StarIcon style={{ width: "20px", height: "19px", color: "#1D9BF0" }} />

            </div>
          </div>


        </div>



        <div className='right-stat'>
          <h2>What people are saying </h2>
          <div className='rating'> <h2>4.9</h2> <StarIcon /> </div>
          <p>Average ratings from all reviews</p>
        </div>


      </div>




      <Footer />
    </React.Fragment>
  )
}

export default career