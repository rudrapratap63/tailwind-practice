import { ArrowDownNarrowWide, Calendar, ChevronDown, MoveLeft, MoveRight, Video } from 'lucide-react'
import React from 'react'
import MeetingBtnsCard from './MeetingBtnsCard'

function ScheduleTimeDetails({text, time, status, color}){
  return(
    <div className='flex justify-start gap-3'>
      <div className='min-w-20'>
        <h1 className='font-semibold text-gray-700 text-lg'>{time}</h1>
        <p className='font-semibold text-gray-400 text-xs'>{time}</p>
      </div>
      <span className='border-r border-[#3fdfd0]'></span>
      <div>
        <div className='flex flex-start items-center gap-2'>
          <p className='text-gray-400 font-semibold text-sm'>{status}</p>
          <Video color={color} size={15} />
        </div>
        <h1 className='font-semibold text-xl text-gray-800' >{text}</h1>
      </div>
    </div>
  )
}

function ScheduleCard() {
  return (
    <div className=''>
      <div className='flex flex-col gap-3 mt-2'>

        {/* Greeting */}
        <div className='p-3 space-y-2'>
          <p className='font-semibold text-lg text-gray-600'>Monday, 14 October</p>
          <h1 className='font-bold text-3xl text-[#104084]'>Good morning, Prabhleen! 👋</h1>
        </div>

        <div className='flex flex-col gap-10 mb-10 lg:flex-row lg:items-start lg:justify-start' >
        {/* Calender */}
          <div className='flex flex-col p-6 lg:min-w-100 lg:w-fit gap-5 border border-gray-200 shadow-sm rounded-xl'>
            <div className='flex justify-between p-2 items-center shadow-sm  bg-gray-50'>
              <div className='flex space-x-2.5 items-center'>
                <Calendar size={20} />
                <h3 className='font-medium text-gray-700'>Monday, 14 October 2024</h3>
                <ChevronDown className='text-gray-500' size={20} />
              </div>
              <div className='flex gap-4'>
                <MoveLeft className='text-gray-500' strokeWidth={2.5} size={20} />
                <MoveRight className='text-gray-500' strokeWidth={2.5} size={20} />
              </div>
            </div>
            {/* Schedule */}
            <div className='flex flex-col p-2 mt-2 gap-3'>
              <ScheduleTimeDetails text={"UX Webinar"} time={"11:30 AM"} status={"Live"} color={"red"} />
              <ScheduleTimeDetails text={"My first Webinar"} time={"11:30 AM"} status={"Upcoming"} color={"blue"} />
              <ScheduleTimeDetails text={"Important Webinar"} time={"11:30 AM"} status={"Upcoming"} color={"blue"} />
              <ScheduleTimeDetails text={"Webinar 1"} time={"11:30 AM"} status={"Upcoming"} color={"blue"} />
            </div>
          </div>
        <MeetingBtnsCard />
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard