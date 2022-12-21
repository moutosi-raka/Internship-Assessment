import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-hot-toast';
import './Layout1.css'

const Layout1 = () => {
const [fieldInfo, setFieldInfo] = useState([]);

 useEffect( ()=> {
    fetch('fieldInfo.json')
    .then(res => res.json())
    .then(data=> setFieldInfo(data))
 })

 const handleForm = (event)=>
 {
   event.preventDefault();
   const form = event.target;
   const fullName = form.fullName.value;
   const BOD = form.bod.value;
   const email = form.email.value;
   const phone = form.phone.value;

  const userInfo ={
    fullName,
    BOD,
    email,
    phone
  }

  fetch('http://localhost:5000/users-info',{
    method: 'POST',
    headers:{
        'content-type' : 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.acknowledged){
          toast.success('Successfully added user Information');
          event.target.reset();
      }
  })
  .catch(e=> console.log(e));

 }

    return (
        <div className='w-11/12 mx-auto mt-12'>
           <form onSubmit={handleForm} className='w-3/2'>
                {
                    fieldInfo.map(info => 
                    <div key={info.id} className='block md:flex mb-5'>
                    <label className='text md:w-1/4 '>{info.lable}</label>
                    <input type={info.tpye} name={info.name} 
                    required className='w-full md:w-2/5 h-[1.6rem] bg-[#D9D9D9] p-3 outline-none text-black' />
                </div>)
                }
                <div className='w-[90%] lg:w-[65%] flex 
                md:justify-center lg:justify-end'>
                <button className='bg-[#5DADF7] px-5 py-1'>Submit</button>
                </div>
           </form>
        </div>
    );
};

export default Layout1;