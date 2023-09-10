import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  // reduce method defines the total of the total and item & 0 is the initial value

  const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
