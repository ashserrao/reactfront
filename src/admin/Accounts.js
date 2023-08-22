import React, { useState } from 'react';
import './Accounts.css';
import axios from "axios";

const Accounts = () => {
  // Retrieve the second data from localStorage
  const storedData = localStorage.getItem('allUserData');
  const parsedData = JSON.parse(storedData);
  //const imageSrc = localStorage.getItem("imageSrc");
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the data based on the search query
  const filteredData = parsedData.filter(row => {
    const fullName = `${row.first_name} ${row.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase()) || row.email.includes(searchQuery.toLowerCase());
  });

  // State to store the selected user for user details popup
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserImg, setSelectedUserImg] = useState(null);
  const handleUserDetailsClick = async (user) => {
   
    const fileName=user?.masteruser?.kycdetails?.cus_photo;
    const userImageResponse = await axios.get(
      `/user/imageServe/${fileName}`,
      {
        responseType: "arraybuffer", // Tell axios to treat the response as binary data
      }
    );

    // Convert the received byte array (bytecode) to a URL
    const src2 = URL.createObjectURL(new Blob([userImageResponse.data]));
    setSelectedUserImg(src2);
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Customer Data Table</h1>
      
      {/* Search box */}
      <div className="search-box">
         <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button>
          <i className="fa fa-search">Search</i>
        </button>
      </div>
      
      {/* Table */}
      <table className="table">
      <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Role</th>
             <th>Details</th>
             <th>Update</th>
           </tr>
         </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.first_name} {row.last_name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <td>
                <button
                  style={{ backgroundColor: "lightgreen", color: "black" }}
                  onClick={() => handleUserDetailsClick(row)}
                >
                  User Details
                </button>
              </td>
              <td>
                <button style={{ backgroundColor: "yellow", color: "black" }}>
                  Update User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* User Details Popup */}
      {selectedUser && (
        <div className="user-details-popup" >
          <div className="popup-content" style={{border:"2px solid blue"}}>
            <span className="close-button" onClick={() => setSelectedUser(null)}>
             <b>&times;</b>
            </span>
            <div className="user-details" >
              <div className="user-image">
              <img
                //src="https://www.vhv.rs/dpng/d/144-1443023_transparent-people-png-icon-people-women-icon-png.png"
                src={selectedUserImg}
                alt="Dropdown"
                height="50px"
              />
              </div>
              <div className="user-info">
                <h2>User Details</h2>
                <p>Name: {selectedUser.first_name} {selectedUser.last_name}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Role: {selectedUser.role}</p>
                {/* Add more user details as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
