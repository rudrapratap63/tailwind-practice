import React, { createContext, useContext, useEffect, useState } from 'react'
import logo from "../assets/logoipsum-385.png"
import user from "../assets/user-logo.png"
import { SidebarContext } from '../App'
import { ChevronFirst, ChevronLast, Home, ListRestart, MoreVertical, Settings, UsersRound } from 'lucide-react'

export default function Sidebar({children}) {
   const {expanded, setExpanded} = useContext(SidebarContext);
   useEffect(() => {
      console.log("resize handler");
      if(window.innerWidth > 768) setExpanded(true);
      const handleResize = () => {
         if(window.innerWidth > 768) setExpanded(true)
         else setExpanded(false)
      }
      window.addEventListener("resize", handleResize )

      return () => window.removeEventListener("resize", handleResize);
   }, [])
   return ( 
      <aside className={`h-screen bg-white fixed top-0 left-0 ${expanded && "z-10"}`}>
         <nav className='h-full flex flex-col border-r border-gray-100 shadow-sm'>
            <div className='flex justify-between items-center p-2'>
               <img src={logo} className={`overflow-hidden
                  transition-all ${expanded ? "w-40 ml-1" : "w-0" }`} 
                  alt="" />
               <button onClick={() => setExpanded(curr => !curr)} className='p-2 hover:bg-gray-100 rounded-md cursor-pointer'>
                  {expanded ? <ChevronFirst /> : <ChevronLast /> }
               </button>
            </div>

            <ul className='flex-1 px-2'>
               {children}
            </ul>

            <div className='border-t border-gray-100 flex align-center justify-center p-3 px-2'>
               <img src={user} className='w-8 h-10 rounded-md' alt="user" />
               <div className={`flex justify-between ${expanded ? "w-52 ml-3" : "w-0"} 
                  items-center overflow-hidden transition-all`}>
                  <div className='px-2 leading-4'>
                     <h4 className='font-semibold'>John Doe</h4>
                     <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
                  </div>
                  <button>
                     <MoreVertical size={20} />
                  </button>
               </div>
            </div>
         </nav>
      </aside>
   )
}

export function SidebarItem({icon, text, alert, active, setActive }) {
   const {expanded} = useContext(SidebarContext);
   const currentActive = (active === text); 
   return (
      <li onClick={() => {
         setActive(text)
      }} className={`relative flex items-center py-2
            px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
            ${currentActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
         {icon}
         <span className={`overflow-hidden transition-all
            ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
         {alert && (
            <div className={`absolute ${expanded ? "right-2" : "right-3 top-2"} w-2 h-2 rounded bg-indigo-400`}>
               
            </div>
         )}
         {!expanded && (
            <div className={`absolute left-full rounded-md 
               px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 invisible opacity-20 -translate-x-3
               transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
               `}>
               {text}
            </div>
         )}
      </li>
   )
}
