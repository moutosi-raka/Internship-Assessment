import React from 'react';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Layout3 = () => {
    return (
        <div >
           <div className='w-10/12 mx-auto'>
           <div  className='border my-5 text-center h-20'>
                <h1>My name is Raka</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 my-5'>
                <div className='border rounded-md bg-gray-100 text-black shadow-md h-full'>
                    <Skills></Skills>
                </div>
                <div className='lg:col-span-3 border h-full bg-gray-100 text-black shadow-md rounded-md px-8 py-8'>
                    <Projects></Projects>
                </div>
                <div className='border h-full bg-red-900'>
                    <h1>dev 3</h1>
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