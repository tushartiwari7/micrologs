import React from 'react'
import SidebarList from '../components/SidebarList'
const Sidebar = () => {
  return (
    <aside  className="flex flex-col my-lg">
      <button className='btn btn-primary fs-m px-md py-sm rounded-l m-md flex spread' >New
        <i className='bi bi-caret-down'></i>
      </button>
      <SidebarList />
    </aside>
  )
}

export default Sidebar;