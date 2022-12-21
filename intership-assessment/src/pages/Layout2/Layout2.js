import React from 'react';
import './Layout2.css'

const Layout2 = () => {
    return (
        <div className="overflow-x-auto my-12">
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
  
      <tr>
        <th className='table-color'>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
     
    </tbody>
  </table>
</div>
    );
};

export default Layout2;