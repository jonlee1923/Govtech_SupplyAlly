import React from "react";
import Button from "../../components/button/Button";
import "./loginContainer.css";
import InputField from "../../components/inputField/InputField"

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
                <InputField placeholder={"Enter user name"} setUserName={setUserName} userName={userName} />
                <Button action={login} text={"Login"} selectStyle={"pri"} destination={"/"}/>
            </div>
        </div>
    );
}
