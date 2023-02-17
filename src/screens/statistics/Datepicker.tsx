import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";

type Props = {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
};

const Datepicker = ({ selectedDate, onDateChange }: Props) => {
    const handleBackwardClick = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        onDateChange(newDate);
    };

    const handleForwardClick = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        onDateChange(newDate);
    };

    return (
        <div className="flex items-center justify-center space-x-4">
            <button
                onClick={handleBackwardClick}
                className=""
            >
                <IonIcon name="chevron-back-outline"></IonIcon>
            </button>
            <span className="text-lg font-medium">
                {selectedDate.toDateString()}
            </span>
            <button
                onClick={handleForwardClick}
                className=""
            >
                <IonIcon name="chevron-forward-outline"></IonIcon>
            </button>
        </div>
    );
};

export default Datepicker;
