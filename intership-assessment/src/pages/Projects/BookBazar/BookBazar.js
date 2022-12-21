import React from 'react';
import { HiArrowCircleRight } from "react-icons/hi";

const BookBazar = () => {
    const feature = ["It is a platform on which anyone can buy and sell old and new books.", "Buyers can pay with cards.", "Administrators have control over sellers, buyers, and products", "Administrators can verify seller and delete report item"];
    const technology = ["TailwindCss", "DaisyUI", "React", "Express", "Node.js", "MongoDB" ,"Firebase"] ;
    return (
        <div className='mt-8 mb-4'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <div data-aos="zoom-in" className=''>
                <img src='https://i.ibb.co/j4t5RFJ/Book-bazar.png' alt=''/>
            </div>
            <div className='px-3'>
                <h1 className='font-bold mb-2 text-green-700'>BOOK BAZAR</h1>
                <h4 className='font-semibold mb-1'>Featuer</h4>
                                <ul>
                                    {
                                        feature.map((fea, i) => <li  className='block' key={i + 1}>{i + 1}. {fea}</li>)
                                    }
                                    </ul> 
                               
            </div>
        </div>
         <div>
         <h4 className=' font-bold mt-2 mb-2'>Technology</h4>
          <ul className='grid grid-cols-2 lg:grid-cols-3 mr-3'>
         
          {
              technology.map((tec,i) => <li className='mr-8' key={i+1}><HiArrowCircleRight className='inline mr-1'></HiArrowCircleRight>{tec}</li>)
          }
        </ul> 
        <div data-aos="zoom-in" className='mt-8'>
        <a href='https://book-bazar-76341.firebaseapp.com/' rel="noreferrer" target="_blank" className="btn btn-block my-3">View Demo</a>
        </div>
         </div>
        </div>
    );
};

export default BookBazar;