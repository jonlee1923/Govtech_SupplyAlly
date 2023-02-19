import React, { useState } from "react";
import { ParcelDetail } from "../../models/parcelDetail";
import ParcelInfoRow from "../../components/parcelInfo/ParcelInfoRow";
import "./parcel.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

type Props = {
    trackingId: string;
    parcelDetails: ParcelDetail[];
    submitTracked: () => void;
};

export default function TrackParcelScreen({
    parcelDetails,
    trackingId,
    submitTracked,
}: Props) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    // const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        console.log(checked);
        setIsChecked(checked);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitTracked();
        navigate("/");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
                {/* TODO */}
                {/* maybe change w-80 to full and add margin */}
                <div className="mt-20 flex-col w-80 sm:w-2/3">
                    <div className="flex p-2 bg-priDefault items-center rounded-t-md">
                        <div className="text-4xl">📦</div>
                        <div className="flex-col">
                            <div className="text-xs text-white">Track ID</div>
                            <div className="font-bold text-white">
                                {trackingId}
                            </div>
                        </div>
                    </div>
                    <div className="flex-col px-4 bg-white rounded-b-md overflow-y-scroll max-h-96">
                        {parcelDetails.map((info) => (
                            <ParcelInfoRow info={info} />
                        ))}
                    </div>
                    <div className="flex justify-start my-4 sm:my-8">
                        <input
                            type="checkbox"
                            id="myCheckbox"
                            className="mr-4 w-5 h-5 checkbox"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="myCheckbox" className="ml-2 font-ibm">
                            Mark as tracked.
                        </label>
                    </div>
                    <div className="flex flex-col space-y-1 sm:space-y-0 mb-8 sm:mb-10 sm:flex-row-reverse sm:justify-between sm:gap-96">
                        <Button
                            // action={submitTracked}
                            type="submit"
                            text="Submit"
                            selectStyle="pri"
                            destination="/"
                            disabled={!isChecked}
                            back={false}
                        />
                        <Button
                            // action={() => {}}
                            type=""
                            text="Back"
                            selectStyle="secondary"
                            destination="-1"
                            disabled={false}
                            back={true}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
