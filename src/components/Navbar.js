import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="ui container">
      <ul className="ui menu">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/new/client">New client</Link>
        </li>
        <li className="item">
          <Link to="/new/account">New Account</Link>
        </li>
        <li className="item">
          <Link to="/deposit">Deposit</Link>
        </li>
        <li className="item">
          <Link to="/account">Account By Id</Link>
        </li>
        <li className="item">
          <Link to="/accounts">Accounts By nothing</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
