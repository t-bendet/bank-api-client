import React, { useState, useEffect } from "react";
import Mongo from "../api/mongo";
// TODO add this
const Deposit = () => {
  const [accountId, setAccountId] = useState("");
  const [sum, setSum] = useState(0);
  const deposit = async () => {
    console.log("sjgggggggggggggg");
    try {
      const create = await Mongo.patch("/deposit", {
        accountId: accountId,
        sum: parseInt(sum),
        action: "deposit",
      });
      alert(`${sum} was deposited to account ${accountId}`);
    } catch (e) {
      console.log(e);
    }
  };
  const submitDeposit = (e) => {
    e.preventDefault();
    deposit();
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitDeposit}>
        <div className="field">
          <label htmlFor="name">Account Id </label>
          <input
            placeholder="y878347y3894398738"
            required
            value={accountId}
            onChange={(e) => {
              setAccountId(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="sum">Sum </label>
          <input
            placeholder="300"
            required
            value={sum}
            onChange={(e) => {
              setSum(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Deposit;
