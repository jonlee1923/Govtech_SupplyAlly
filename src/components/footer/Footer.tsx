import React from "react";
import Copyright from "./Copyright";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer flex-col fixed bottom-0 left-0 right-0 h-40 md:h-100">
            <div className="flex my-4 mx-4">
                <p className="text-white text-md font-family-ibm">SupplyAlly</p>
            </div>
            <hr className="border-t-2 border-white-300" />
            <div className="flex flex-wrap text-white m-4 text-xs md:text-xxs font-family-ibm">
                <p className="w-full sm:w-auto mr-2 mb-2">Version 1.0.0</p>
                <p className="w-full sm:w-auto mr-2 mb-2">
                    Last updated 20 Dec 2021
                </p>
                <p className="w-full sm:w-auto mr-2">
                    © 2022 Government of Singapore.
                </p>
            </div>
        </div>
    );
}
