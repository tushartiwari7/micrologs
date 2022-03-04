import React from 'react'
import { useNotelist } from '../context/allnotes-context';

const SidebarList = () => {
  const {setshowOnlyPinnedNotes} = useNotelist();

  return (
    <ul className='list fs-l full-width'>
      {/* <li className='list-item mx-md my-xs py-xs transition'>Home</li> */}
      {/* <li className='list-item mx-md my-xs py-xs transition'>Tags</li> */}
      <li className='list-item mx-md my-xs py-xs transition' onClick={()=>setshowOnlyPinnedNotes(()=>false)}>Notes</li>
      <li className='list-item mx-md my-xs py-xs transition' onClick={()=>setshowOnlyPinnedNotes(()=>true)} >Pinned Notes</li>
      {/* <li className='list-item mx-md my-xs py-xs transition'>Events</li> */}
    </ul>
  )
}

export default SidebarList