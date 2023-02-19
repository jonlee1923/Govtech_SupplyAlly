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
}: // fetchStatistics,
Props) {
    const options: DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [trackedParcelCount, setTrackedParcelCount] = useState<number>(0);
    const [lastUpdatedTime, setLastUpdatedTime] = useState<string>("");

    useEffect(() => {
        let count = 0;

        for (const key in statistics) {
            for (let i = 0; i < statistics[key].length; i++) {
                count++;
            }
        }

        const dates = Object.keys(statistics).sort().reverse();
        console.log(dates[0])
        const latestDate = dates[0]
        const records = statistics[latestDate]
        const timeStrings = records.map((parcel) => parcel.time)
        const lastUpdateTime = timeStrings.sort().reverse()[0]
        // console.log(lastUpdateTime)
        setLastUpdatedTime(lastUpdateTime);
        setTrackedParcelCount(count);
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
                <p className="count">{trackedParcelCount}</p>
                <p>Last tracked at {lastUpdatedTime}</p>
                <div>
                    <Datepicker
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                </div>
                <div className="bg-white rounded-t-md">
                    <div className="flex text-start pl-4 font-bold py-4 border-b">
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
                            <div className="flex h-56 items-center justify-center">No Parcels Tracked On This Date</div>
                        )}
                    </div>
                </div>

                <Button
                    // action={() => {}}
                    type=""
                    text="Back"
                    selectStyle="pri"
                    destination="-1"
                    disabled={false}
                    back={true}
                />
            </div>
        </div>
    );
}
