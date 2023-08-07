import React, { useState } from "react";
import "./transaction.css";
import { useSelector, useDispatch } from "react-redux";
import KycDetails from "../admin/KycDetails";
import RecentTransactions from "./RecentTransactions";
import AccountDetails from "../admin/AccountDetails";
import axios from "axios";

import { updatedMasteruserDetails } from "../userActions";

const TransactionPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [transferData, setTransferData] = useState({
    amount: "",
  });

  const dispatch = useDispatch();
  const userData1 = useSelector((state) => state.user);

  const handleTransferClick = () => {
    setIsPopupOpen(true);
  };

  const token = localStorage.getItem("token");
  const handlePopupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `user/updateCreditTransaction/${userData1?.masteruser?.user_id}`,
        {
          creditAmount: parseFloat(transferData.amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTransferData({
        amount: "",
      });

      console.log(response.data);
      const updatedMasteruser = response.data;

      dispatch(updatedMasteruserDetails(updatedMasteruser));
      //dispatch(updateTransactionDetails(transactionDetails));
    } catch (error) {
      console.error(error);
    }

    console.log(transferData);

    setIsPopupOpen(false);
  };

  return (
    <div className="transaction-page">
      <div className="grid-container">
        <>
          <RecentTransactions></RecentTransactions>
        </>

        <>
          <KycDetails></KycDetails>
        </>
        <>
          <AccountDetails></AccountDetails>
        </>
        <div className="card">
          <h2
            style={{
              backgroundColor: "#000080",
              paddingLeft: "5px",
              color: "white",
            }}
          >
            Actions
          </h2>
          <div className="actions-container">
            <button className="action-button">Transfer Amount</button>
            <button className="action-button" onClick={handleTransferClick}>
              Deposit Amount
            </button>
            <button className="action-button">Withdraw Amount</button>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </span>
            <h2>Deposit</h2>
            <form>
              <div>
                <label>
                  Amount:
                  <input
                    type="text"
                    value={transferData.amount}
                    onChange={(e) =>
                      setTransferData({
                        ...transferData,
                        amount: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <br />
              <br />
              <div>
                <button type="button" onClick={handlePopupSubmit}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
