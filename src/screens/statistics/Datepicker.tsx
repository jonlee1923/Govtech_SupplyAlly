import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import type {DateTimeFormatOptions} from 'intl';

type Props = {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
};

const Datepicker = ({ selectedDate, onDateChange }: Props) => {
    const options:DateTimeFormatOptions = {day: 'numeric', month: 'short', year: 'numeric'};

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
        <div className="flex flex-row items-center justify-center space-x-4 mb-3">
            <button
                onClick={handleBackwardClick}
                className="leftArrow"
            >
                <IonIcon name="chevron-back-outline"></IonIcon>
            </button>
            <span className="font-bold">
                {selectedDate.toLocaleDateString('en-GB', options)}
            </span>
            <button
                onClick={handleForwardClick}
                className="rightArrow onClick"
            >
                <IonIcon name="chevron-forward-outline"></IonIcon>
            </button>
        </div>
    );
};

export default Datepicker;
