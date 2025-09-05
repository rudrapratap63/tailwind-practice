import { CalendarClock, Film, Plus } from 'lucide-react'
import React from 'react'

function Button({icon, text}){
  return(
    <div className='flex flex-col items-center gap-2'>
      <button className='bg-[#3fdfd0] cursor-pointer p-3 rounded-xl text-center'>
        {icon}
      </button>
      <p className='font-semibold'>{text}</p>
    </div>
  )
}

function MeetingBtnsCard() {
  return (
    <div className='m-5 p-6 h-fit border lg:w-[40%] grid grid-rows-1 grid-cols-1 gap-4 lg:grid-cols-1 xl:grid-cols-3 xl:min-w-[300px] xl:w-fit xl:leading-tight  border-gray-200 shadow-sm rounded-xl' >
      <Button text={"Schedule a Webinar"} icon={<CalendarClock strokeWidth={2.5} />} />
      <Button text={"Join a Webinar"} icon={<Plus strokeWidth={2.5} />} />
      <Button text={"Open Recordings"} icon={<Film strokeWidth={2.5} />} />
    </div>
    // <div className='m-5 p-6 h-fit flex flex-wrap justify-start items-center space-x-2 lg:space-y-2 border lg:w-[40%]  lg:flex-row lg:items-start border-gray-200 shadow-sm rounded-xl' >
    //   <Button text={"Schedule a Webinar"} icon={<CalendarClock strokeWidth={2.5} />} />
    //   <Button text={"Join a Webinar"} icon={<Plus strokeWidth={2.5} />} />
    //   <Button text={"Open Recordings"} icon={<Film strokeWidth={2.5} />} />
    // </div>
  )
}
export default MeetingBtnsCard