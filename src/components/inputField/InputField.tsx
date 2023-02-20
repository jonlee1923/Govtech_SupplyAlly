import React, { useState } from "react";
import "./inputField.css";
import IonIcon from "@reacticons/ionicons";

type Props = {
    setField: React.Dispatch<React.SetStateAction<string>>;
    fieldValue: string;
    placeholder: string;
    error: string;
};

export default function InputField({
    setField,
    fieldValue,
    placeholder,
    error,
}: Props) {
    return (
        <div className="mb-4">
            <input
                placeholder={placeholder}
                className={`username w-full focus:outline-none ${
                    error ? "error" : ""
                }`}
                data-cy="dynamicInput"
                value={fieldValue}
                onChange={(e) => setField(e.target.value)}
            />
            {error && (
                <div className="flex text-red-500 items-center space-x-1">
                    <IonIcon
                        name="alert-circle-outline"
                        className="text-lg"
                    ></IonIcon>
                    <p className="text-sm" data-cy="errorMsg">{error}</p>
                </div>
            )}
        </div>
    );
}
