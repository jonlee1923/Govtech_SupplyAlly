import React from "react";
import LoginButton from "../loginButton/LoginButton";
import UsernameField from "../usernameField/UsernameField";
import "./loginContainer.css";

type Props = {
    login: () => void;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
};

export default function LoginContainer({
    login,
    setUserName,
    userName,
}: Props) {
    return (
        <div className="flex flex-row mt-20 justify-center">
            <div className="flex flex-col p-4 bg-white justify-evenly w-60">
                <p className="text-center mb-6">Login</p>
                <UsernameField setUserName={setUserName} userName={userName} />
                <LoginButton login={login} />
            </div>
        </div>
    );
}
