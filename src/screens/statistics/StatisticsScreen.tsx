import React, { useState, useEffect } from "react";
import "./statistics.css";
import Button from "../../components/button/Button";
// import DatePicker from "react-datepicker";
import Datepicker from "./Datepicker";
// import { DayRecord } from "../../models/dayRecord";
import type { DateTimeFormatOptions } from "intl";
import { TrackingRecord } from "../../models/trackingRecord";
import StatisticsRow from "../../components/statisticsRow/StatisticsRow";

type Props = {
    statistics: Record<string, TrackingRecord[]>;
    // fetchStatistics: () => void;
};

export default function StatisticsScreen({
    statistics,
    // fetchStatistics,
}: Props) {
    const options: DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        
    }, [statistics]);

    // console.log(
    //     "info",
    //     selectedDate.toLocaleDateString("en-GB", options),
    //     statistics[selectedDate.toLocaleDateString("en-GB", options)]
    // );

    return (
        <div className="flex justify-center font-ibm">
            <div className="flex-col mt-20 text-center w-full sm:w-3/5 mx-4">
                <p className="title font-bold text-black text-2xl my-6">
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
                    <div className="flex text-start pl-4 font-bold py-4">
                        <p className="w-1/2 ">Tracking ID</p>
                        <p className="w-1/2">Last updated date</p>
                    </div>
                    <div className="flex-col rounded-b-md bg-white mb-8 overflow-y-scroll max-h-80">
                        {selectedDate.toLocaleDateString("en-GB", options) in
                        statistics ? (
                            statistics[
                                selectedDate.toLocaleDateString(
                                    "en-GB",
                                    options
                                )
                            ].map((parcelDetails) => (
                                <StatisticsRow
                                    trackingId={parcelDetails.trackingId}
                                    date={parcelDetails.date}
                                    time={parcelDetails.time}
                                />
                            ))
                        ) : (
                            <p>Nothing to show</p>
                        )}
                    </div>
                </div>

                <Button
                    action={() => {}}
                    text="Back"
                    selectStyle="pri"
                    destination="-1"
                    disabled={false}
                />
            </div>
        </div>
    );
}
