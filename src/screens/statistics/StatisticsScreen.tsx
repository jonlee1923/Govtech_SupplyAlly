import React, { useState } from "react";
import "./statistics.css";
import Button from "../../components/button/Button";
import DatePicker from "react-datepicker";
import Datepicker from "./Datepicker";

export default function Statistics() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="flex justify-center font-ibm">
            <div className="flex-col mt-20 text-center w-full mx-4">
                <p className="title font-bold text-black text-2xl">
                    Statistics
                </p>
                <p className="text-black">You tracked</p>
                <p className="count">211</p>
                <p>Last tracked at 630pm</p>
                <div>
                    <Datepicker
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                </div>
                <div className="bg-white rounded-t-md">
                    <div className="flex">
                        <p>Tracking ID</p>
                        <p>Last updated date</p>
                    </div>
                </div>

                <Button
                    action={() => {}}
                    text="back"
                    selectStyle="pri"
                    destination="back"
                />
            </div>
        </div>
    );
}
