import React from 'react'

type Props = {
    trackingId: string;
    date: string;
    time: string;
}


export default function StatisticsRow({trackingId, date, time}: Props) {
  return (
    <div className='flex'>
        <div>{trackingId}</div>
        <div className='flex-col'>
            <div>{date},</div>
            <div>{time}</div>
        </div>
    </div>
  )
}
