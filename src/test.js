import React, { useState, useEffect } from "react";
import Mongo from "./api/mongo";

const App = () => {
  const [data, setData] = useState([]);
  const getAccounts = async () => {
    const test = await Mongo.get("accounts");
    setData(test.data);
  };
  useEffect(() => {
    getAccounts();
  }, []);
  const renderAccounts = data.map((el) => {
    return <h1>{el.owner}</h1>;
  });
  return <div>{data.length && renderAccounts}</div>;
};
export default App;
