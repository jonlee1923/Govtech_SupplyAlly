import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";

type Props = {
    action: () => void;
    trackingId: string;
    setTrackingId: React.Dispatch<React.SetStateAction<string>>;
};

export default function TrackingId({ action, trackingId, setTrackingId}: Props) {
    return (
        <div className="flex flex-row mt-40 sm:mt-20 justify-center">
            <div className="flex flex-col p-10 sm:p-4 bg-white justify-evenly w-80 rounded-md font-ibm">
                <p className="mb-6 font-bold">Track parcel</p>
                <p className="text-xs mb-6">
                    Key in individial package number to track
                </p>
                <label className="text-xs font-bold mb-2">Tracking ID</label>
                <InputField fieldValue={trackingId} setField={setTrackingId} placeholder="Please enter tracking id"/>
                <Button
                    action={action}
                    text={"Check"}
                    selectStyle={"pri"}
                    destination={"/parcel"}
                    disabled={false}
                />
            </div>
        </div>
    );
}
