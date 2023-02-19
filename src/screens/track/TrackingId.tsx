import React, { useState } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import { useNavigate } from "react-router-dom";

type Props = {
    fetchParcelDetails: () => void;
    trackingId: string;
    setTrackingId: React.Dispatch<React.SetStateAction<string>>;
};

export default function TrackingId({
    fetchParcelDetails,
    trackingId,
    setTrackingId,
}: Props) {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (trackingId.length === 0) {
            setErrorMessage("Please fill out the Tracking ID field");
            return;
        } 

        if(trackingId.length < 11){
            // console.log()
            setErrorMessage("Please input a valid Tracking ID field");
            return;
        }
        
        setErrorMessage("");
        fetchParcelDetails();
        navigate("/parcel");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row mt-40 sm:mt-20 justify-center">
                <div className="flex flex-col p-10 sm:p-4 bg-white justify-evenly w-80 rounded-md font-ibm">
                    <p className="mb-6 font-bold">Track parcel</p>
                    <p className="text-xs mb-6">
                        Key in individial package number to track
                    </p>
                    <label className="text-xs font-bold mb-2">
                        Tracking ID
                    </label>
                    <InputField
                        fieldValue={trackingId}
                        setField={setTrackingId}
                        placeholder="Please enter tracking id"
                        error={errorMessage}
                    />
                    <Button
                        // action={action}
                        type="submit"
                        text={"Check"}
                        selectStyle={"pri"}
                        destination={"/parcel"}
                        disabled={false}
                        back={false}
                    />
                </div>
            </div>
        </form>
    );
}
