import React from 'react';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';

const Layout3 = () => {
    return (
        <div>
            <div  className='border my-5 text-center h-20'>
                <h1>My name is Raka</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 my-5'>
                <div className='border rounded-md bg-purple-100 text-black shadow-md '>
                    <Skills></Skills>
                </div>
                <div className='lg:col-span-3 border h-60 bg-red-900'>
                    <h1>dev 2</h1>
                </div>
                <div className='border h-60 bg-red-900'>
                    <h1>dev 3</h1>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout3;