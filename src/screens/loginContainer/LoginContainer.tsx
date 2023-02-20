import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./loginContainer.css";
import InputField from "../../components/inputField/InputField";
import {useNavigate } from "react-router-dom";

type Props = {
    handleLogin: () => void;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
};

export default function LoginContainer({
    handleLogin,
    setUserName,
    userName,
}: 
Props) {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userName.length === 0) {
            setErrorMessage("Please fill out the username field");
            return;
        }
        handleLogin();
        setErrorMessage("")
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-center mt-20 sm:my-24">
                <div className="flex flex-col p-10 bg-white justify-evenly w-80">
                    <p className="text-center mb-6 font-ibm font-bold text-2xl">Login</p>
                    <InputField
                        placeholder={"Enter user name"}
                        setField={setUserName}
                        fieldValue={userName}
                        error={errorMessage}
                    />
                    <Button
                        // type="submit"
                        text={"Login"}
                        selectStyle={"pri"}
                        // destination={"/"}
                        disabled={false}
                        back={false}
                    />
                </div>
            </div>
        </form>
    );
}
