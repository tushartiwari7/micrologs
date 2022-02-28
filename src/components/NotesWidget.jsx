import React from 'react'
import Note from './Note'
const NotesWidget = () => {
  return (
    <div className='notes-widget rounded-l p-sm'>
      <h2 className='h2 left mx-sm pos-rel'>
        Notes
        <i className='bi bi-journals mx-sm'></i>
        <i className='bi bi-journal-plus pos-abs'></i>
      </h2>
      <div className='grid notes-wrapper my-sm p-xs'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <div className='notes rounded-m full-width card flex flex-center'>
          <button className='btn btn-primary btn-float rounded-circle'>
            <i className='add-note bi bi-plus'></i>
          </button>
        </div>
      </div>
    </div>

  )
}

export default NotesWidget