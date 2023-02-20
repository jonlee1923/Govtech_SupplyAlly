import React, { useState } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import { useNavigate } from "react-router-dom";

type Props = {
    fetchParcelDetails: () => void;
    trackingId: string;
    setTrackingId: React.Dispatch<React.SetStateAction<string>>;
};

export default function TrackingIdInput({
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

        if(trackingId.length < 11 || trackingId.length > 11){
            // console.log()
            setErrorMessage("Please input a valid Tracking ID field (11 Characters)");
            return;
        }
        
        setErrorMessage("");
        fetchParcelDetails();
        navigate("/parcel");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-center mt-20 sm:my-24">
                <div className="flex flex-col p-10 sm:p-4 bg-white justify-evenly w-80 rounded-md font-ibm">
                    <p className="mb-6 font-bold">Track parcel</p>
                    <p className=" mb-6">
                        Key in individual package number to track
                    </p>
                    <label className=" font-bold mb-2">
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
                        // type="submit"
                        text={"Check"}
                        selectStyle={"pri"}
                        // destination={"/parcel"}
                        disabled={false}
                        back={false}
                    />
                </div>
            </div>
        </form>
    );
}
