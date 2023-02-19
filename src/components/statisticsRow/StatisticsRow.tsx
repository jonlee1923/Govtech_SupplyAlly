import React from 'react'

type Props = {
    trackingId: string;
    date: string;
    time: string;
}


export default function StatisticsRow({trackingId, date, time}: Props) {
  return (
    <div className='flex text-start pl-4 py-2 border-t '>
        <div className=' w-1/2 '>{trackingId}</div>
        <div className='flex flex-col w-1/2 sm:flex-row sm:space-x-2'>
            <div>{date},</div>
            <div>{time}</div>
        </div>
    </div>
  )
}
