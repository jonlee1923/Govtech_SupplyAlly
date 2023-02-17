import React from "react";
import "./inputField.css";

type Props = {
    setField: React.Dispatch<React.SetStateAction<string>>;
    fieldValue: string;
    placeholder: string;
};

export default function InputField({ setField, fieldValue, placeholder }: Props) {
    return (
        <div className="mb-4">
            <input
                placeholder={placeholder}
                className="username w-full"
                value={fieldValue}
                onChange={(e) => setField(e.target.value)}
            />
        </div>
    );
}
