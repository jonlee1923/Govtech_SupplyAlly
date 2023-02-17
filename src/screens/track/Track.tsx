import React from "react";
import Button from "../../components/button/Button"

type Props = {
    action: () => void;
    
};

export default function Track({action}: Props) {
    return (
        <div className="flex flex-row mt-20 justify-center">
            <div className="flex flex-col p-4 bg-white justify-evenly w-60 rounded-md font-ibm">
                <p className="mb-6 font-bold">Track parcel</p>
                <p className="text-xs mb-6">Key in individial package number to track</p>
                <label className="text-xs font-bold">Tracking ID</label>
                <Button action={action} text={"Check"} selectStyle={"pri"} destination={"/tracker"}/>
            </div>
        </div>
    );
}
