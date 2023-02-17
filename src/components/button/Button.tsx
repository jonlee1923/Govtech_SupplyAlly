import React from "react";
import "./button.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

type Props = {
    action:  () => void;
    text: string;
    selectStyle: string;
    destination: string;
};

export default function Button({
    action,
    text,
    selectStyle,
    destination,
}: Props) {
    const navigate = useNavigate();
    return (
        <button
            className={`w-full ${selectStyle}Button ${selectStyle}ButtonText font-ibm`}
            onClick={() => {
                action();
                navigate(destination);
            }}
        >
            {text}
         </button>
    );
}
