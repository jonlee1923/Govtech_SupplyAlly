import React from "react";
import "./button.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

type Props = {
    // type: string;
    text: string;
    selectStyle: string;
    // destination: string;
    back: boolean;
    disabled: boolean;
};

export default function Button({
    back,
    // type,
    text,
    selectStyle,
    // destination,
    disabled,
}: Props) {
    const navigate = useNavigate();
    return (
        <button
            className={
                disabled
                    ? "w-full mb-4 disabledButton pointer-events-none"
                    : `w-full mb-4 ${selectStyle}Button ${selectStyle}ButtonText font-ibm hover:bg-${selectStyle}HoverFocus active:bg-${selectStyle}OnPress`
            }
            data-cy="dynamicBtn"
            onClick={() => {
                if (back) {
                    navigate(-1);
                }
            }}
        >
            {text}
        </button>
    );
}
