import React from 'react'
const todaysDate = () => `${Date().slice(0,3)},${Date().slice(3,10)}`;
const Header = () => {
  return (
    <div class="full-width fs-xl p-sm flex header">
    <div className='header-title'>
      micrologs
    </div>
    <div className='fs-l mx-md'>
      {todaysDate()}
    </div>
  </div>
  )
}

export default Header;