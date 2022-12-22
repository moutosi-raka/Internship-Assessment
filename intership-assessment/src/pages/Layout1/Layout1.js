import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-hot-toast';
import dateFormat from "dateformat";
import './Layout1.css'
import { useNavigate } from 'react-router-dom';

const Layout1 = () => {
const [fieldInfo, setFieldInfo] = useState([]);
const navigate = useNavigate();

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
   const date = form.bod.value;
   const email = form.email.value;
   const phone = form.phone.value;
   
   const BOD = dateFormat(date, 'paddedShortDate')
  const userInfo ={
    fullName,
    BOD,
    email,
    phone
  }
  
  console.log(userInfo)
  fetch('https://internship-assessment-server-moutosi-raka.vercel.app/users-info',{
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
          navigate('/layout2')
      }
  })
  .catch(e=> console.log(e));

 }

    return (
        <div className='w-10/12 mx-auto mt-12 h-[78vh]'>
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
                <button className='bg-[#5DADF7] px-5 py-1 font-[17px]'>Submit</button>
                </div>
           </form>
        </div>
    );
};

export default Layout1;