import React from 'react'

type Props = {
    trackingId: string;
    date: string;
    time: string;
}


export default function StatisticsRow({trackingId, date, time}: Props) {
  return (
    <div className='flex text-start pl-4 py-2 border-t' data-cy="statisticRow" >
        <div className=' w-1/2 ' data-cy="statisticRow trackingId">{trackingId}</div>
        <div className='flex flex-col w-1/2 sm:flex-row sm:space-x-2'>
            <div data-cy="statisticRow date">{date},</div>
            <div data-cy="statisticRow time">{time}</div>
        </div>
    </div>
  )
}
