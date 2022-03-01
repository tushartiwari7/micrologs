import React from 'react'
import { useNotelist } from '../context/allnotes-context';
import { useModal } from '../context/modal-context'
import Note from './Note'
const NotesWidget = () => {
  const {toggle} = useModal();
  const {notelist} = useNotelist();
  
  console.log(`notelist: `, notelist);
  return (
    <div className='notes-widget rounded-l p-sm'>
      <h2 className='h2 left mx-sm pos-rel'>
        Notes
        <i className='bi bi-journals mx-sm'></i>
        <i className='bi bi-journal-plus pos-abs' onClick={toggle}></i>
      </h2>
      <div className='grid notes-wrapper my-sm p-xs'>
        {notelist&&notelist.sort((a,b)=>b.priority-a.priority).map(note=> <Note key={note.id} node={note} />)}
        <div className='notes rounded-m full-width card flex flex-center' onClick={toggle}>
          <button className='btn btn-primary btn-float rounded-circle'>
            <i className='add-note bi bi-plus'></i>
          </button>
          <h3 className='h3 my-md'>Create New Note</h3>
        </div>
      </div>
    </div>
  )
}

export default NotesWidget