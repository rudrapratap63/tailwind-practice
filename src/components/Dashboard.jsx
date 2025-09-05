import React, { useContext } from 'react'
import UserInfoCard from './UserInfoCard'
import ScheduleCard from './ScheduleCard'
import MeetingBtnsCard from './MeetingBtnsCard'
import { SidebarContext } from '../App'

function Dashboard() {
   const {expanded} = useContext(SidebarContext)
   return (
    <div className={`h-screen flex flex-col gap-2 ml-18 ${expanded ? "md:ml-68" : ""}
      lg:flex-row lg:justify-start
    `}>
      <UserInfoCard />
      <div className='flex flex-col w-full gap-2 lg:flex-row'>
         <ScheduleCard />
         {/* <MeetingBtnsCard /> */}
      </div>
    </div>
  )
}

export default Dashboard