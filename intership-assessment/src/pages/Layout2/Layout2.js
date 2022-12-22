import React, { useEffect, useState } from 'react';
import './Layout2.css'

const Layout2 = () => {
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://internship-assessment-server-moutosi-raka.vercel.app/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
    return (
        <div className="overflow-x-auto pb-12 mt-12 w-10/12 mx-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>BOD</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
  
      {
        users.map((user,i) => 
          <tr key={user._id}>
          <th className='table-color'>{i+1}</th>
          <td>{user.fullName}</td>
          <td>{user.BOD}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>)
      }
     
    </tbody>
  </table>
</div>
    );
};

export default Layout2;