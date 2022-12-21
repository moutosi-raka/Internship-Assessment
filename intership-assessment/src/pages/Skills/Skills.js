import React from 'react';
import './Skills.css';
import { HiArrowCircleRight } from "react-icons/hi";

const Skills = () => {
    const skills =["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React js", "Node js", "Express js", "MongoDB", "Firebase Authentication", "Git", "Github"]
    return (
        <div className='py-5 px-4'>
            <h1 className='text-2xl lg:text-xl text-center font-bold mb-5 '>My Skills</h1>
           <ul className='flex flex-wrap lg:block skills'>
            {
               skills.map((skill, i)=> 
               <li  key={i}><HiArrowCircleRight className='inline mr-1'></HiArrowCircleRight>{skill}</li>) 
            }
            
           </ul>
        </div>
    );
};

export default Skills;