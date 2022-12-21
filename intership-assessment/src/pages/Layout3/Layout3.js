import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import { Typewriter } from 'react-simple-typewriter'

const Layout3 = () => {
    return (
        <div >
           <div className='w-10/12 mx-auto'>
           <div  className='my-5 border rounded-md bg-gray-100 text-black shadow-md p-5 text-center'>
                <h1 className='text-3xl font-bold'> Moutosi Showrin Raka</h1>
                <h3 className='text-2xl font-bold'>
                <span style={{ color: 'black', fontWeight: 'bold' }}>
          <Typewriter
            words={['MERN Stack Developer', 'React Developer', 'Frontend Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
                </h3>
                <p>Email : raka29077997@gmail.com</p>
                <p>Phone Number : +880153184368</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 my-5'>
                <div className='border rounded-md bg-gray-100 text-black shadow-md h-full'>
                    <Skills></Skills>
                </div>
                <div className='lg:col-span-3 border h-full bg-gray-100 text-black shadow-md rounded-md px-8 py-8'>
                    <Projects></Projects>
                </div>
                <div className='border rounded-md bg-gray-100 text-black shadow-md h-full py-5 px-3'>
                    <About></About>
                </div>
            </div>
           </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout3;