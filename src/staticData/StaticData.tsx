import { TrackingRecord } from "../models/trackingRecord";
import { ParcelDetail } from "../models/parcelDetail";


export const statisticsData: Record<string, TrackingRecord[]>  = {
    "20 Feb 2023": [
        {
            trackingId: "11915375000",
            date: "20 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11915375000",
            date: "20 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11915375000",
            date: "20 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11912345600",
            date: "20 Feb 2023",
            time: "2:50 PM",
        },
        {
            trackingId: "13567875000",
            date: "20 Feb 2023",
            time: "2:35 PM",
        },
        {
            trackingId: "11915398765",
            date: "20 Feb 2023",
            time: "2:25 PM",
        },
        {
            trackingId: "13214575000",
            date: "20 Feb 2023",
            time: "2:15 PM",
        },
    ],

    "19 Feb 2023": [
        {
            trackingId: "11915375000",
            date: "19 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11912345600",
            date: "19 Feb 2023",
            time: "2:50 PM",
        },
        {
            trackingId: "13567875000",
            date: "19 Feb 2023",
            time: "2:35 PM",
        },
        {
            trackingId: "11915398765",
            date: "19 Feb 2023",
            time: "2:25 PM",
        },
        {
            trackingId: "13214575000",
            date: "19 Feb 2023",
            time: "2:15 PM",
        },
    ],

    "18 Feb 2023": [
        {
            trackingId: "11915375000",
            date: "18 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11912345600",
            date: "18 Feb 2023",
            time: "2:50 PM",
        },
        {
            trackingId: "13567875000",
            date: "18 Feb 2023",
            time: "2:35 PM",
        },
        {
            trackingId: "11915398765",
            date: "18 Feb 2023",
            time: "2:25 PM",
        },
        {
            trackingId: "13214575000",
            date: "18 Feb 2023",
            time: "2:15 PM",
        },
    ],

    "17 Feb 2023": [
        {
            trackingId: "11915375000",
            date: "17 Feb 2023",
            time: "3:00 PM",
        },
        {
            trackingId: "11912345600",
            date: "17 Feb 2023",
            time: "2:50 PM",
        },
        {
            trackingId: "13567875000",
            date: "17 Feb 2023",
            time: "2:35 PM",
        },
        {
            trackingId: "11915398765",
            date: "17 Feb 2023",
            time: "2:25 PM",
        },
        {
            trackingId: "13214575000",
            date: "17 Feb 2023",
            time: "2:15 PM",
        },
    ],
}

export const parcelData:ParcelDetail[] =
[
    {
        date: "Monday, 19 Feb",
        time: "2:22 PM",
        details:
            "Package in transit. Flight containing package has departed",
    },

    {
        date: "Monday, 17 Feb",
        time: "2:22 PM",
        details:
            "Package in transit. Flight containing package has departed",
    },
    {
        date: "Sunday, 16 Feb",
        time: "5:09 PM",
        details: "Parcel left the carrier facility",
    },
    {
        date: "Friday, 13 Feb",
        time: "8:41 AM",
        details: "Parcel arrived at a carrier facility",
    },
    
]