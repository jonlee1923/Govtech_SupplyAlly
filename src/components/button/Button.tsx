import React from "react";
import "./button.css";
import { NavLink } from "react-router-dom";

type Props = {
    action: () => void;
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
    return (
        <button className={`${selectStyle}Button`}>
            <NavLink to={destination}>
                <p
                    className={`${selectStyle}ButtonText font-ibm`}
                    onClick={action}
                >
                    {text}
                </p>
            </NavLink>
        </button>
    );
}
