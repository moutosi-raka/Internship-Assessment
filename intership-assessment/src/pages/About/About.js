import React from 'react';
import pic1 from '../../assests/profile1.webp';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-xl text-center font-bold mb-5 '>About Me</h1>
            <div data-aos="zoom-in" className="avatar flex justify-center mb-2">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img className='' src={pic1} alt='' />
                </div>
            </div>

            <p data-aos="zoom-in" className='text-gray-700 text-center'>I want to pursue a challenging and awarding career in the field of IT and be a part of progressive
                organization that gives scope to enhance my knowledge and    utilizing my potential towards the growth of
                the organization.</p>
            <div className='mt-8 flex justify-center'>
            <a href='https://github.com/moutosi-raka' rel="noreferrer" target="_blank" className="icons  mr-5"><FaGithub></FaGithub></a>
            <a href='https://www.linkedin.com/in/moutosi-showrin-raka/' rel="noreferrer" target="_blank" className="icons ]"><FaLinkedin></FaLinkedin></a>
            </div>
        </div>
    );
};

export default About;