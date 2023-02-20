import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoginContainer from "./screens/loginContainer/LoginContainer";
import TrackingIdInput from "./screens/track/TrackingIdInput";
import { ParcelDetail } from "./models/parcelDetail";
import { TrackingRecord } from "./models/trackingRecord";
import Home from "./screens/home/Home";
import ParcelDetailsScreen from "./screens/track/ParcelDetailsScreen";
import { DayRecord } from "./models/dayRecord";
import StatisticsScreen from "./screens/statistics/StatisticsScreen";
import type { DateTimeFormatOptions } from "intl";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { statisticsData, parcelData } from "./staticData/StaticData";

export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [trackingId, setTrackingId] = useState<string>("");
    const [parcelDetails, setParcelDetails] = useState<ParcelDetail[]>([]);
    const [trackingStatistics, setTrackingStatistics] = useState<
        Record<string, TrackingRecord[]>
    >({});
    // Simulate fetching data of parcels
    const fetchParcelDetails = () => {
        setParcelDetails(parcelData);
    };

    const fetchStatistics = () => {
        setTrackingStatistics(statisticsData);
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

    const dateOptions: DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    const timeOptions: DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    const submitTracked = () => {
        let currentDateTime: Date = new Date();
        let trackedDate: string = currentDateTime.toLocaleDateString(
            "en-GB",
            dateOptions
        );
        let trackedTime: string = currentDateTime.toLocaleTimeString(
            "en-US",
            timeOptions
        );

        let trackedParcel: TrackingRecord = {
            trackingId: trackingId,
            date: trackedDate,
            time: trackedTime,
        };

        if (trackingStatistics[trackedDate]) {
            let updatedDayStatistic: TrackingRecord[] = [
                ...trackingStatistics[trackedDate],
                trackedParcel,
            ];

            setTrackingStatistics({
                ...trackingStatistics,
                [trackedDate]: updatedDayStatistic,
            });
        } else {
            setTrackingStatistics({
                ...trackingStatistics,
                [trackedDate]: [trackedParcel],
            });
        }

        console.log(trackingStatistics);
    };
    useEffect(() => {
        fetchStatistics();
    }, []);

    useEffect(() => {}, [loggedIn]);

    return (
        <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
                <Navbar
                    isLoggedIn={loggedIn}
                    userName={userName}
                    logout={logout}
                />
                <div className="w-full"></div>
                {loggedIn ? (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/track"
                            element={
                                <TrackingIdInput
                                    fetchParcelDetails={fetchParcelDetails}
                                    trackingId={trackingId}
                                    setTrackingId={setTrackingId}
                                />
                            }
                        />
                        <Route
                            path="/parcel"
                            element={
                                <ParcelDetailsScreen
                                    trackingId={trackingId}
                                    parcelDetails={parcelDetails}
                                    submitTracked={submitTracked}
                                />
                            }
                        />
                        <Route
                            path="/statistics"
                            element={
                                <StatisticsScreen
                                    statistics={trackingStatistics}
                                />
                            }
                        />
                        <Route path="*" element={<Home />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <LoginContainer
                                    handleLogin={login}
                                    userName={userName}
                                    setUserName={setUserName}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <LoginContainer
                                    handleLogin={login}
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
