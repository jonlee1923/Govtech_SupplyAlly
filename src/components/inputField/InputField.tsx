import React from "react";
import "./inputField.css";

type Props = {
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    placeholder: string;
};

export default function InputField({ setUserName, userName, placeholder }: Props) {
    return (
        <div className="mb-4">
            <input
                placeholder={placeholder}
                className="username w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
    );
}
