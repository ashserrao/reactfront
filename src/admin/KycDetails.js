import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateKycDetails } from "../userActions";

const KycDetails = () => {
  const [isKycPopupOpen, setIsKycPopupOpen] = useState(false);

  const [updateKyc, setUpdateKyc] = useState({
    pan_no: "",
    aadhar_no: "",
  });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handleUpdateKyc = () => {
    setIsKycPopupOpen(true);
  };

  const token = localStorage.getItem("token");

  const handleKycUpdatePopupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `user/updateKyc/${userData?.masteruser?.kycdetails?.kyc_id}`,
        updateKyc,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the transfer data submission here
      console.log(updateKyc);
      // You can perform the API call for transferring the amount to the receiver's account

      setUpdateKyc({
        pan_no: "",
        aadhar_no: "",
      });

      const kycDetails = response.data;
      console.log(kycDetails);
      console.log(userData);

      // Dispatch the updateKycDetails action with the KYC details
      dispatch(updateKycDetails(kycDetails));
    } catch (error) {
      console.error(error);
    }
    setIsKycPopupOpen(false);
  };

  const handlePopupClose = () => {
    setIsKycPopupOpen(false);
  };

  return (
    <div className="card">
      <h2 style={{ backgroundColor: "#000080", paddingLeft: "5px", color: "white" }}>KYC Details</h2>
      <p>Name: {userData?.first_name} {userData?.last_name}</p>
      <p>Pan No.: {userData?.masteruser?.kycdetails?.pan_no}</p>
      <p>Aadhar No.: {userData?.masteruser?.kycdetails?.aadhar_no}</p>
       
       <br />
       

      <button className="action-button" onClick={handleUpdateKyc}>
        Update KYC
      </button>

      {isKycPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handlePopupClose}>
              &times;
            </span>
            <h2>Update KYC Details</h2>
            <form onSubmit={handleKycUpdatePopupSubmit}>
              <div>
                <label htmlFor="pan_no">
                  Pan No.
                  <input
                    type="text"
                    value={updateKyc.pan_no}
                    onChange={(e) => setUpdateKyc({ ...updateKyc, pan_no: e.target.value })}
                  />
                </label>
              </div>
              <br />
              <div>
                <label htmlFor="aadhar_no">
                  Aadhar No.
                  <input
                    type="text"
                    value={updateKyc.aadhar_no}
                    onChange={(e) => setUpdateKyc({ ...updateKyc, aadhar_no: e.target.value })}
                  />
                </label>
              </div>
              <br />
              <br />
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KycDetails;
