import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoginContainer from "./screens/loginContainer/LoginContainer";
import TrackingId from "./screens/track/TrackingId";
import Statistics from "./screens/statistics/StatisticsScreen";
import { ParcelDetail } from "./models/parcelDetail";
import { StatisticDetail } from "./models/statisticDetail";
import Home from "./screens/home/Home";
import TrackParcelScreen from "./screens/track/TrackParcelScreen";

export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [trackingId, setTrackingId] = useState<string>("");
    const [parcelDetails, setParcelDetails] = useState<ParcelDetail[]>([]);
    const [trackingStatistics, setTrackingStatistics] = useState<
        StatisticDetail[]
    >([]);

    

    // Simulate fetching data of parcels
    const fetchParcelDetails = () => {
        setParcelDetails([
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },

            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
            {
                date: "Sunday, 12 Feb",
                time: "5:09 PM",
                details: "Parcel left the carrier facility",
            },
            {
                date: "Friday, 10 Feb",
                time: "8:41 AM",
                details: "Parcel arrived at a carrier facility",
            },
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
            {
                date: "Monday, 13 Feb",
                time: "2:22 PM",
                details:
                    "Package in transit. Flight containing package has departed",
            },
        ]);
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

    useEffect(() => {}, [loggedIn]);

    return (
        <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
                <Navbar
                    isLoggedIn={loggedIn}
                    userName={userName}
                    logout={logout}
                />
                {loggedIn ? (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/track"
                            element={
                                <TrackingId
                                    action={fetchParcelDetails}
                                    trackingId={trackingId}
                                    setTrackingId={setTrackingId}
                                />
                            }
                        />
                        <Route
                            path="/parcel"
                            element={
                                <TrackParcelScreen
                                    trackingId={trackingId}
                                    parcelDetails={parcelDetails}
                                />
                            }
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
            </div>
        </BrowserRouter>
    );
}
