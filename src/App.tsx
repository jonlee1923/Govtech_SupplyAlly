import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoginContainer from "./components/loginContainer/LoginContainer";

export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");

    const login = () => {
        setLoggedIn(true);
        console.log("logged in")
        console.log(userName);
    };

    return (
        <div className="w-full">
            <Navbar isLoggedIn={loggedIn} userName={userName}/>
            <LoginContainer
                login={login}
                userName={userName}
                setUserName={setUserName}
            />
            <Footer />
        </div>
    );
}
