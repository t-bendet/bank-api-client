import React, { useState, useEffect } from "react";
import Mongo from "../api/mongo";

const NewClient = () => {
  const client = {
    clientDetails: {
      name: "",
      email: "",
      isActive: true,
      phoneNumber: "",
    },
    accountDetails: {
      cash: 0,
      credit: 0,
      isActive: true,
    },
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const createClient = async () => {
    try {
      const create = await Mongo.post("/create-client", { ...client });
      alert(create.data);
    } catch (e) {
      console.log(e);
    }
  };
  const submitClient = (e) => {
    e.preventDefault();
    client.clientDetails.name = name;
    client.clientDetails.email = email;
    client.clientDetails.phoneNumber = number;
    createClient();
  };
  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitClient}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Jane"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            placeholder="jane@acme.com"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phoneNumber">phone number</label>
          <input
            placeholder="0505111352"
            type="text"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewClient;
