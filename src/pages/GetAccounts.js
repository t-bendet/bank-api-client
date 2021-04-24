import React, { useState } from "react";
import Mongo from "../api/mongo";
// TODO add this

const GetAccounts = () => {
  const [data, setData] = useState([]);
  const accounts = async () => {
    try {
      const create = await Mongo.get(`/accounts`);
      console.log(create);
      setData(create.data);
    } catch (e) {
      console.log(e);
    }
  };
  const submitAccounts = (e) => {
    e.preventDefault();
    accounts();
  };
  const renderAccounts = data.map((e, i) => {
    return (
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "3px solid black",
          margin: "1rem",
          padding: "3px",
        }}
        key={i}
      >
        <p>{`cash : ${e.cash}`}</p>
        <p>{`credit : ${e.credit}`}</p>
        <p>{`account id : ${e._id}`}</p>
        <p>{`owner id : ${e.owner}`}</p>
      </div>
    );
  });
  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitAccounts}>
        <button type="submit">Show accounts....please</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.length && renderAccounts}
      </div>
    </div>
  );
};

export default GetAccounts;
