import React from "react";
import { ParcelDetail } from "../../models/parcelDetail";

type Props = {
    info: ParcelDetail;
};

export default function ParcelInfoRow({ info }: Props) {
    return (
        <div className="flex-col font-ibm mb-4">
            <p className="font-bold text-sm">{info.date}</p>
            <div className="flex text-xs mt-2">
                <div>{info.time}</div>
                <div className="flex">{info.details}</div>
            </div>
        </div>
    );
}
