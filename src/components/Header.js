import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [ loginBtn, setLoginBtn] = useState("Login");

    // if no dependency array => useEffect called on every render, means whenever Header render useEffect call;
    // if dependency array is empty = [] => useEffect is called on intial render (just once);
    // if we give any state varialbe inside array => useEffect called whenever stats is change => [loginBtn]

    // Do not create useState function outside the component
    
    useEffect(() => {
        console.log("hiii rendered");
    })
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
                </li>
            
            
            <li>Card</li>
            <button className="login-btn" onClick={() => {
                (loginBtn === "Login") ? setLoginBtn("LogOut") : setLoginBtn("Login")
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;