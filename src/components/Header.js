import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";  

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const { loggedInUser } = useContext(userContext);

    const cartItems = useSelector((store) => store?.cart?.items);
    

    console.log(cartItems);

    // if no dependency array => useEffect called on every render, means whenever Header render useEffect call;
    // if dependency array is empty = [] => useEffect is called on intial render (just once);
    // if we give any state varialbe inside array => useEffect called whenever stats is change => [loginBtn]

    // Do not create useState function outside the component

    useEffect(() => {
        console.log("hiii rendered");
    })
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg m-1">
            <div className="logo-container">
                <img
                    className="w-44"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart : {cartItems.length}</Link>
                        </li>
                    <button className="login-btn" onClick={() => {
                        (loginBtn === "Login") ? setLoginBtn("LogOut") : setLoginBtn("Login")
                    }}>{loginBtn}</button>
                   <li className="px-4">
                        <h2>{loggedInUser}</h2>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;