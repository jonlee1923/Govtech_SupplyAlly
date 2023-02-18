import React from "react";
import { ParcelDetail } from "../../models/parcelDetail";

type Props = {
    info: ParcelDetail;
};

export default function ParcelInfoRow({ info }: Props) {
    return (
        <div className="flex-col font-ibm mb-4">
            <p className="font-bold">{info.date}</p>
            <div className="flex mt-2">
                <div className="whitespace-nowrap mr-2">{info.time}</div>
                <div className="sm:w-1/4">{info.details}</div>
            </div>
        </div>
    );
}
