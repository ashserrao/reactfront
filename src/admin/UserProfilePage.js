import React, { useState } from "react";
import "./UserProfilePage.css";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { updateBeneficiaryDetails } from "../userActions";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    bank_name: "",
    beneficiary_accno: "",
    beneficiary_name: "",
    max_limit: "",
  });
  const dispatch = useDispatch();
  const userData1 = useSelector((state) => state.user);
  //console.log(userData1);

  const token = localStorage.getItem("token");
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/user/updateBeneficiary/${userData1?.beneficiary.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({
        bank_name: "",
        beneficiary_accno: "",
        beneficiary_name: "",
        max_limit: "",
      });
      const beneficiaryDetails = response.data;

      // Dispatch the updateBeneficiaryDetails action with the beneficiary details
      dispatch(updateBeneficiaryDetails(beneficiaryDetails));
    } catch (error) {
      console.error(error);
    }

    setShowForm(false);
  };

  const handleAddBeneficiary = () => {
    setShowForm(true);
  };
  const handleTransaction = () => {
    navigate("/transactions");
  };

  return (
    <>
      <div className="user-profile">
        <div className="transactions-card card">
          <h2>Transactions</h2>
          

          <ul>
            {userData1?.masteruser?.transactions
              .slice(-2)
              .reverse()
              .map((transaction, index) => (
                <li key={index}>
                  <span className="amount">
                    {transaction.lastTransactionDetails}
                  </span>
                  <span className="date">
                    {transaction.dateOfLastTransaction}
                  </span>
                </li>
              ))}
          </ul>
          <button className="btn-primary" onClick={handleTransaction}>
            Transaction Page
          </button>
          <button className="btn-primary" style={{display:"inline-block",float:"right",
          pointerEvents:"none",backgroundColor:"Highlight",borderRadius: "5px"}}  
          disabled={true}>
              Current Balance:: ₹ {userData1?.masteruser?.current_Balance}
          </button>
        </div>

        <div className="personal-info-card card">
          <h2>Personal Information</h2>
          <p>Name: {userData1?.first_name + userData1?.last_name}</p>
          <p>Email: {userData1?.email}</p>
          <p>Birth Date:{userData1?.date_of_birth}</p>
          <p>Phone No. :{userData1?.phone_no}</p>
          <p>Account No. :{userData1?.masteruser?.account_Number}</p>

          {/* Add more personal information */}
        </div>

        <div className="beneficiary-card card">
          <h2>Beneficiary Information</h2>

          {showForm ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="bank_name">Bank Name:</label>
              <input
                type="text"
                id="bank_name"
                name="bank_name"
                value={formData.bank_name}
                onChange={handleInputChange}
              />
              

              <label htmlFor="beneficiary_accno">
                Beneficiary Account Number:
              </label>
              <input
                type="text"
                id="beneficiary_accno"
                name="beneficiary_accno"
                value={formData.beneficiary_accno}
                onChange={handleInputChange}
              />
              
              <label htmlFor="beneficiary_name">Beneficiary Name:</label>
              <input
                type="text"
                id="beneficiary_name"
                name="beneficiary_name"
                value={formData.beneficiary_name}
                onChange={handleInputChange}
              />
              
              <label htmlFor="max_limit">Max Limit:</label>
              <input
                type="text"
                id="max_limit"
                name="max_limit"
                value={formData.max_limit}
                onChange={handleInputChange}
              />
              

              <button type="submit" className="btn-primary">
                Submit Details
              </button>
            </form>
          ) : (
            <>
              <>
                <p>Name: {userData1?.beneficiary?.beneficiary_name}</p>
                <p>
                  Account Number: {userData1?.beneficiary?.beneficiary_accno}
                </p>
                <p>Bank Name: {userData1?.beneficiary?.bank_name}</p>
                <p>Max Limit: {userData1?.beneficiary?.max_limit}</p>
              </>
              <button className="button-primary" onClick={handleAddBeneficiary}>
                + Beneficiary
              </button>
            </>
          )}
        </div>

        <div className="bank-services-card card">
          <h2>Bank Services</h2>
          <ul>
            <li>Online Banking</li>
            <li>Mobile Banking</li>
            <li>ATM Services</li>
            {/* Add more bank services */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
