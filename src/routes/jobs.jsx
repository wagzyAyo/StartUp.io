import React, { useState } from 'react'
import Fb from "../assets/fb.jpg.png";
import TwitterLogo from "../assets/twitter-logo.jpg.png";
import Tiktok from "../assets/tiktok-logo.jpg.png";
import "./css/jobs.css"
import Footer from "../components/footer"
import Filter from '@mui/icons-material/FilterList';


const jobs = () => {
  const [search, setSearch] = useState('');
  return (
    <React.Fragment>

      <div className='job-nav'>
        <div className='search'>
          <input type="search" placeholder='Search for jobs' onChange={event => { setSearch(event.target.value) }} />

        </div>

        <div className='filter'>
          <Filter />
        </div>
      </div>


      <div className='grid'>
        <div className='sub-tittle'> <h3>Latest jobs</h3></div>
        <div><h5>Find jobs that match your credentials</h5></div>
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


      </div>
      <div className='load-center'>
        <div className='sec-cta2'>
          <button>Load more</button>
        </div>
      </div>


      <Footer />
    </React.Fragment>
  )
}

export default jobs