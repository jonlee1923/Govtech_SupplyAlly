import React from "react";
import "./usernameField.css";

type Props = {
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
};

export default function UsernameField({ setUserName, userName }: Props) {
    return (
        <div className="mb-4">
            <input
                placeholder="Enter user name"
                className="username w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
    );
}
