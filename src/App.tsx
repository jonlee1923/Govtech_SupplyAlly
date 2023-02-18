import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoginContainer from "./screens/loginContainer/LoginContainer";
import TrackingId from "./screens/track/TrackingId";
import { ParcelDetail } from "./models/parcelDetail";
import { TrackingRecord } from "./models/trackingRecord";
import Home from "./screens/home/Home";
import TrackParcelScreen from "./screens/track/TrackParcelScreen";
import { DayRecord } from "./models/dayRecord";
import StatisticsScreen from "./screens/statistics/StatisticsScreen";
import type { DateTimeFormatOptions } from "intl";

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

    const fetchStatistics = () => {
        setTrackingStatistics({
            "18 Feb 2023": [
                {
                    trackingId: "11915375000",
                    date: "18 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11915375000",
                    date: "18 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11915375000",
                    date: "18 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11912345600",
                    date: "18 Feb 2023",
                    time: "2:50 PM",
                },
                {
                    trackingId: "13567875000",
                    date: "18 Feb 2023",
                    time: "2:35 PM",
                },
                {
                    trackingId: "11915398765",
                    date: "18 Feb 2023",
                    time: "2:25 PM",
                },
                {
                    trackingId: "13214575000",
                    date: "18 Feb 2023",
                    time: "2:15 PM",
                },
            ],

            "17 Feb 2023": [
                {
                    trackingId: "11915375000",
                    date: "17 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11912345600",
                    date: "17 Feb 2023",
                    time: "2:50 PM",
                },
                {
                    trackingId: "13567875000",
                    date: "17 Feb 2023",
                    time: "2:35 PM",
                },
                {
                    trackingId: "11915398765",
                    date: "17 Feb 2023",
                    time: "2:25 PM",
                },
                {
                    trackingId: "13214575000",
                    date: "17 Feb 2023",
                    time: "2:15 PM",
                },
            ],

            "16 Feb 2023": [
                {
                    trackingId: "11915375000",
                    date: "16 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11912345600",
                    date: "16 Feb 2023",
                    time: "2:50 PM",
                },
                {
                    trackingId: "13567875000",
                    date: "16 Feb 2023",
                    time: "2:35 PM",
                },
                {
                    trackingId: "11915398765",
                    date: "16 Feb 2023",
                    time: "2:25 PM",
                },
                {
                    trackingId: "13214575000",
                    date: "16 Feb 2023",
                    time: "2:15 PM",
                },
            ],

            "15 Feb 2023": [
                {
                    trackingId: "11915375000",
                    date: "15 Feb 2023",
                    time: "3:00 PM",
                },
                {
                    trackingId: "11912345600",
                    date: "15 Feb 2023",
                    time: "2:50 PM",
                },
                {
                    trackingId: "13567875000",
                    date: "15 Feb 2023",
                    time: "2:35 PM",
                },
                {
                    trackingId: "11915398765",
                    date: "15 Feb 2023",
                    time: "2:25 PM",
                },
                {
                    trackingId: "13214575000",
                    date: "15 Feb 2023",
                    time: "2:15 PM",
                },
            ],
        });
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

        let updatedDayStatistic: TrackingRecord[] = [
            ...trackingStatistics[trackedDate],
            trackedParcel,
        ];

        setTrackingStatistics({
            ...trackingStatistics,
            [trackedDate]: updatedDayStatistic,
        });
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
                                // TODO: Rename to parceldetailsscreen
                                <TrackParcelScreen
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
                                    // fetchStatistics={fetchStatistics}
                                />
                            }
                        />
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
