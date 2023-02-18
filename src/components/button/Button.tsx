import React from "react";
import "./button.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

type Props = {
    action:  () => void;
    text: string;
    selectStyle: string;
    destination: string;
    disabled: boolean;
};

export default function Button({
    action,
    text,
    selectStyle,
    destination,
    disabled
}: Props) {
    const navigate = useNavigate();
    return (
        <button
            className={disabled?"w-full mb-4 disabledButton pointer-events-none":`w-full mb-4 ${selectStyle}Button ${selectStyle}ButtonText font-ibm`}
            onClick={() => {
                action();
                if(destination === "-1"){
                    navigate(-1)
                } else{
                    navigate(destination)
                }
            }}
        >
            {text}
         </button>
    );
}
