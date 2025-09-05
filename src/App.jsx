import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import Sidebar, { SidebarItem } from './components/Sidebar'
import { Calendar, Flag, Home, Layers, LayoutDashboard, LifeBuoy, Settings, StickyNote } from 'lucide-react'
import Dashboard from './components/Dashboard';

export const SidebarContext = createContext();

function App() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState("Home");
  return (
    <div>
      <SidebarContext.Provider value={{expanded, setExpanded}} >
        <Sidebar >
          <SidebarItem icon={<Home size={20} />} setActive={setActive} active={active} text={"Home"} alert/>
          <SidebarItem icon={<LayoutDashboard size={20} />} setActive={setActive} active={active} text={"Dashboard"} />
          <SidebarItem icon={<StickyNote size={20} />} setActive={setActive} active={active} text={"Projects"} alert />
          <SidebarItem icon={<Calendar size={20} />} setActive={setActive} active={active} text={"Calender"} />
          <SidebarItem icon={<Layers size={20} />} setActive={setActive} active={active} text={"Tasks"}  />
          <SidebarItem icon={<Flag size={20} />} setActive={setActive} active={active} text={"Reporting"}  />
          <hr className='my-3' />
          <SidebarItem icon={<Settings size={20} />} setActive={setActive} active={active} text={"Settings"}  />
          <SidebarItem icon={<LifeBuoy size={20} />} setActive={setActive} active={active} text={"help"}  />
        </Sidebar>
        <main className='h-screen overflow-y-auto w-auto'>
          <img src="https://images.unsplash.com/photo-1652267113336-8bba86c7cc44?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className='h-[20vh] w-full object-cover'
            alt="" />
            <div className='p-4'>
              <Dashboard />
            </div>
        </main>
      </SidebarContext.Provider>
    </div>
  )
}

export default App
