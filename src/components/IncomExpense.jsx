import { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";

const IncomExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((total, item) => (total += item), 0) 
    .toFixed(2);

    const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((total, item) => (total += item), 0) * -1
    .toFixed(2);


  return (
    <div className="inc-exp-container ">
      <div>
        <h2>Income</h2>
        <p className="money plus">+{income}</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomExpense;
