import React from 'react';
import './Accounts.css';

const Accounts = () => {
  // Retrieve the second data from localStorage
  const storedData = localStorage.getItem('allUserData');
  const parsedData = JSON.parse(storedData);
  //console.log(parsedData);

  return (
    <div>
      <h1>Customer Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
      
          </tr>
        </thead>
        <tbody>
          {parsedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.first_name} {row.last_name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
             <td><button className='btn btn-success'>User Details</button></td>
             <td><button className='btn btn-success'>Update User</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
