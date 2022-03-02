import React from 'react'
import SidebarList from '../components/SidebarList'
import {useModal} from '../context/modal-context'

const getTime = () => {
  const t = new Date();
  return `${t.getHours()}: ${t.getMinutes()}`
};

const Sidebar = () => {
  const {open,createNewNote} = useModal();
  return (
    <aside  className={`flex flex-col pos-rel my-lg ${open && 'blur'}`}>
      <button className='btn btn-primary fs-m px-md py-sm rounded-l m-md flex spread'
      onClick={createNewNote}
      >New
        <i className='bi bi-caret-down'></i>
      </button>
      <SidebarList />
      <h1 className='h1 pos-abs time full-width'>{getTime()}</h1>
    </aside>
  )
}

export default Sidebar;