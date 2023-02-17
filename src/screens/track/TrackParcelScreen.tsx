import React from "react";
import { ParcelDetail } from "../../models/parcelDetail";
import ParcelInfoRow from "../../components/parcelInfo/ParcelInfoRow";
import "./parcel.css";
import Button from "../../components/button/Button";

type Props = {
    trackingId: string;
    parcelDetails: ParcelDetail[];
};

export default function TrackParcelScreen({
    parcelDetails,
    trackingId,
}: Props) {
    return (
        // <div className="flex mt-20 justify-center">
        //     <div className="flex-col font-ibm ">
        //         <div className="flex p-2 bg-priDefault items-center w-80 rounded-t-md">
        //             <div className="text-4xl">📦</div>
        //             <div className="flex-col">
        //                 <div className="text-xs text-white">Track ID</div>
        //                 <div className="font-bold text-white">{trackingId}</div>
        //             </div>
        //         </div>
        //         <div className="flex-col px-4 bg-white w-80 rounded-b-md y-scroll max-h-30">
        //             {parcelDetails.map((info) => (
        //                 <ParcelInfoRow info={info} />
        //             ))}
        //         </div>
        // <div className="flex flex-col justify-center">
        //     <div>Mark as tracked</div>
        //     {/* <Button /> */}
        //     <button>back</button>
        // </div>
        //     </div>
        // </div>
        <div className="flex justify-center">
            <div className="mt-20 flex-col">
                <div className="flex p-2 bg-priDefault items-center w-80 rounded-t-md">
                    <div className="text-4xl">📦</div>
                    <div className="flex-col">
                        <div className="text-xs text-white">Track ID</div>
                        <div className="font-bold text-white">{trackingId}</div>
                    </div>
                </div>
                <div className="flex-col px-4 bg-white w-80 rounded-b-md overflow-y-scroll max-h-60">
                    {parcelDetails.map((info) => (
                        <ParcelInfoRow info={info} />
                    ))}
                </div>
                <div className="flex justify-start my-4">
                    <input
                        type="checkbox"
                        id="myCheckbox"
                        className="mr-4 w-5 h-5 checkbox"
                    />
                    <label htmlFor="myCheckbox" className="ml-2 font-ibm">
                        Mark as tracked.
                    </label>
                </div>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:mb-2 sm:flex-row-reverse sm:justify-between">
                    <Button
                        action={() => {}}
                        text="Submit"
                        selectStyle="pri"
                        destination="back"
                    />
                    <Button
                        action={() => {}}
                        text="back"
                        selectStyle="secondary"
                        destination="back"
                    />
                </div>
            </div>
        </div>
    );
}
