import React from 'react';
import "./Pain.css";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Pain = () => {
    return ( 
        <section className="v-wrapper" id='learn'>
        <div className="app">
            <div className="main-content">

                <div className=" left-side flexColStart v-right r-head ">                 
                    <span className='orangeText'>Pain Quotient Index (PQI)</span>
                    <span className='primaryText  '> Are you having Pain?<br/><br/></span>
                    <span className='secondaryText hel'>When our muscles degenerate or weaken, they lose their load bearing capabilities which results in transfer of load to other organs of the body. This sudden load on organs not originally designed to carry load may cause pain in different forms.
                     <br/>The first sign of pain can be treated as a warning signal. It can be either acute or chronic and it is essential to start a care continuum.</span>                
                </div>

                {/* Right Side */}
                <div className="right-side">
                    {/* Images Above */}
                    <div className="images-above">
                        <div className="video-containe">
                            <video src="./image11.mp4" autoPlay muted loop></video>
                            <div className="image-overlay">
                                <p>Assess your Pain</p>
                            </div>
                        </div>

                    </div>

                    {/* Images Below */}
                    <div className="images-below">
                    <div className='extra'>
                    <div className="video-containerr">
                            <video src="./image11.mp4" autoPlay muted loop></video>
                            <div className="image-overlay">
                                <p>Assess your Pain</p>
                            </div>
                        </div>

                    </div>
                        <div className="video-containerr">
                            <video src="./image12.mp4" autoPlay muted loop></video>
                            <div className="image-overlay">
                                <p>Consult a Specialist</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="video-containerr">
                            <video src="./image14.mp4" autoPlay muted loop></video>
                            <div className="image-overlay">
                                <p>Start your Care</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            {/* Additional Section */}
        </div>
        </section>
    );
}

export default Pain;