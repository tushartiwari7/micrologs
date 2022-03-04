import React from 'react'
import { useNotelist } from '../context/allnotes-context';
import { useModal } from '../context/modal-context'
import Note from './Note'
const NotesWidget = () => {
  const {createNewNote} = useModal();
  const {notelist,showOnlyPinnedNotes} = useNotelist();
  
  console.log(`notelist: `, notelist);
  return (
    <div className='notes-widget rounded-l p-sm'>
      <h2 className='h2 left mx-sm pos-rel'>
        {showOnlyPinnedNotes ? "Pinned Notes" : "Notes"}
        <i className='bi bi-journals mx-sm'></i>
        <i className='bi bi-journal-plus pos-abs' onClick={createNewNote}></i>
      </h2>
      <div className='grid notes-wrapper my-sm p-xs'>
      {showOnlyPinnedNotes && (notelist ? notelist.filter(note=>note.isPinned).map(note=> <Note key={note.id} node={note} />) : "You didn't pinnedany notes")}
      {!showOnlyPinnedNotes &&
      <>
      <div className='notes rounded-m full-width card flex flex-center' onClick={createNewNote}>
        <button className='btn btn-primary btn-float rounded-circle'>
          <i className='add-note bi bi-plus'></i>
        </button>
        <h3 className='h3 my-md'>Create New Note</h3>
      </div>
      {notelist&&notelist.sort((a,b)=>b.priority-a.priority).map(note=> <Note key={note.id} node={note} />)}
      </>
    }
      </div>
    </div>
  )
}

export default NotesWidget;