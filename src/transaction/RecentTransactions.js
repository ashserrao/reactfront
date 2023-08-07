
import { useSelector } from "react-redux";

const RecentTransactions = () => {
  const userData1 = useSelector((state) => state.user);

  return (
    <div className="card">
      <h2
        style={{
          backgroundColor: "#000080",
          paddingLeft: "5px",
          color: "white",
        }}
      >
        Recent Transactions
      </h2>
      <ul>
        {userData1?.masteruser?.transactions
          .slice(-3)
          .reverse()
          .map((transaction, index) => (
            <li key={index}>
              <span className="amount">
                {transaction.lastTransactionDetails + "    "}
              </span>
              <span className="date">
                on {"  " + transaction.dateOfLastTransaction}
              </span>
            </li>
          ))}
      </ul>

      <button
        className="btn-primary"
        style={{
          display: "inline-block",
          float: "right",
          pointerEvents: "none",
          backgroundColor: "Green",
          borderRadius: "5px",
        }}
        disabled={true}
      >
        Current Balance:: ₹ {userData1?.masteruser?.current_Balance}
      </button>
    </div>
  );
};

export default RecentTransactions;

