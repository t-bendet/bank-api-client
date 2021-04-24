import React, { useState, useEffect } from "react";
import Mongo from "../api/mongo";
// TODO add this
const NewAccount = () => {
  const [owner, setOwner] = useState("");
  const createAccount = async () => {
    try {
      const create = await Mongo.post("/create-account", { owner });
      alert("account " + create.data._id + " created");
    } catch (e) {
      console.log(e);
    }
  };
  const submitAccount = (e) => {
    e.preventDefault();
    createAccount();
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitAccount}>
        <div className="field">
          <label htmlFor="name">Owner</label>
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

export default NewAccount;
