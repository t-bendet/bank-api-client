import React, { useState } from "react";
import Mongo from "../api/mongo";
// TODO add this

const GetAccount = () => {
  const [owner, setOwner] = useState("");
  const accountByID = async () => {
    try {
      const create = await Mongo.get(`/account/${owner}`);
      const res = `client:${create.data._id},
      cash:${create.data.cash},
      credit:${create.data.credit}`;
      alert(res);
    } catch (e) {
      console.log(e);
    }
  };
  const submitId = (e) => {
    e.preventDefault();
    accountByID();
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitId}>
        <div className="field">
          <label htmlFor="name">Owner Id</label>
          <input
            placeholder="y878347y3894398738"
            required
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetAccount;
