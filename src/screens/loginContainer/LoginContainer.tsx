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
        <div className="flex flex-row mt-40 sm:mt-20 justify-center">
            <div className="flex flex-col p-10 bg-white justify-evenly w-80">
                <p className="text-center mb-6">Login</p>
                <InputField placeholder={"Enter user name"} setField={setUserName} fieldValue={userName} />
                <Button action={login} text={"Login"} selectStyle={"pri"} destination={"/"}/>
            </div>
        </div>
    );
}
