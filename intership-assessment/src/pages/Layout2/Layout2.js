import React from 'react';
import './Layout2.css'

const Layout2 = () => {
    return (
        <div className="overflow-x-auto my-12">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>BOD</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
  
      <tr>
        <th className='table-color'>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
     
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>

    </tbody>
  </table>
</div>
    );
};

export default Layout2;