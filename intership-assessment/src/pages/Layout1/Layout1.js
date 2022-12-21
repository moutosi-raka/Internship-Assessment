import React from 'react';
import './Layout1.css'

const Layout1 = () => {
    return (
        <div className='w-11/12 mx-auto mt-12'>
           <form className='w-3/2'>
                <div className='block md:flex'>
                    <label className='text md:w-1/4 '>First Name :</label>
                    <input className='w-full md:w-2/5 h-[1.6rem] bg-[#D9D9D9] p-3 outline-none' />
                </div>
                <div className='my-5 block md:flex'>
                    <label className='text md:w-1/4'>Date Of Birth :</label>
                    <input className='w-full md:w-2/5 h-[27px] bg-[#D9D9D9] p-3 outline-none' />
                </div>
                <div className='block md:flex'>
                    <label className='text md:w-1/4'>Email :</label>
                    <input className='w-full md:w-2/5 h-[27px]  bg-[#D9D9D9] p-3 outline-none' />
                </div>
                <div className='my-5 block md:flex'>
                    <label className='text md:w-1/4'>Phone Number:</label>
                    <input className='w-full md:w-2/5 h-[27px] bg-[#D9D9D9] p-3 outline-none' />
                </div>
                <div className='w-[90%] lg:w-[65%] flex 
                md:justify-center lg:justify-end'>
                <button className='bg-[#5DADF7] px-5 py-1'>Submit</button>
                </div>
           </form>
        </div>
    );
};

export default Layout1;