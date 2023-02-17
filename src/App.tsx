import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoginContainer from "./screens/loginContainer/LoginContainer";
import Track from "./screens/track/Track";
import Statistics from "./screens/statistics/Statistics";
import { ParcelDetail } from "./models/parcelDetail";
import Home from "./screens/home/Home";

export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [trackingId, setTrackingId] = useState<string>("");
    const [parcelDetails, setParcelDetails] = useState<ParcelDetail[]>([]);

    // Simulate fetching data of parcels
    const fetchParcelDetails = () => {
        setParcelDetails([]);
    };

    const login = () => {
        setLoggedIn(true);
        console.log("logged in");
        console.log(userName);
    };

    const logout = () => {
        setLoggedIn(false);
        console.log("logged out");
        setUserName("");
    };

    // const check

    useEffect(() => {}, [loggedIn]);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={loggedIn} userName={userName} logout={logout} />
            {loggedIn ? (
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/track"
                        element={<Track action={fetchParcelDetails} />}
                    />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LoginContainer
                                login={login}
                                userName={userName}
                                setUserName={setUserName}
                            />
                        }
                    />
                </Routes>
            )}
            <Footer />
        </BrowserRouter>
    );
}
