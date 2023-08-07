import { useSelector } from "react-redux";


const AccountDetails = () => {

    const userData1 = useSelector((state) => state.user);
    return(
        <div className="card">
          <h2
            style={{
              backgroundColor: "#000080",
              paddingLeft: "5px",
              color: "white",
            }}
          >
            Account Details
          </h2>
          <p>Phone No. :{userData1?.phone_no}</p>
          <p>Account No. :{userData1?.masteruser?.account_Number}</p>
          {/* Add your account details data here */}
        </div>
    )
}

export default AccountDetails;