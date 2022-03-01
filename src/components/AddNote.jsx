import { useState } from 'react';
import { useModal } from '../context/modal-context'
import { useNotelist } from '../context/allnotes-context'
import {v4} from 'uuid';
const AddNote = () => {
  const {open,toggle: toggleModal} = useModal();
  const {setnoteList} = useNotelist();
  
  const [noteData, setnoteData] = useState({
    title: "",
    body: "",
    isPinned: false
  });

  const updateTitle = (e) => setnoteData(data=>({...data,title: e.target.value}));
  const updateBody = (e) => setnoteData(data=>({...data,body: e.target.value}));
  const togglePin = (e) => setnoteData(data=>({...data,isPinned: !data.isPinned}));
  const resetNote = () => setnoteData(()=>({
    title: "",
    body: "",
    isPinned: false
  }));
 
  const appendNote = () => {
    setnoteList(list=>[...list,{...noteData,priority: noteData.isPinned ? 1 : 0, id: v4()}]);
    resetNote();
    toggleModal();
  }
 
  return (
  <div className="modal rounded-m flex-col p-md" style={{display: open?"flex":"none"}}>
    <div className="modal-exit full-width">
      <i className={`bi ${noteData.isPinned ? "bi-pin-fill" : "bi-pin"} fs-xl`} onClick={togglePin}></i>
    </div>
    <input 
           type="text" 
           className="input h2 full-width px-sm py-xs my-xs rounded-s"
           placeholder='Title'
           value={noteData.title}
           onChange={updateTitle}
     />
    <textarea 
      type="text" 
      rows={10}
      columns={10}
      className="input txtbox full-width px-sm py-xs rounded-s h4"
      placeholder='Take a note'
      value={noteData.body}
      onChange={updateBody}
      >
    </textarea>
    <div className="btn-group fs-l flex my-md pos-rel">
      <button className="btn btn-outline-success add-category rounded-m px-sm py-xs fs-m quicksand pos-abs" onClick={resetNote}>Add Category</button>
      <button className="btn btn-outline-warning rounded-m px-sm py-xs fs-m quicksand" onClick={resetNote}>Reset</button>
      <button className="btn btn-outline-error rounded-m px-sm py-xs fs-m quicksand" onClick={toggleModal}>Close</button>
      <button className="btn btn-outline-primary rounded-m px-sm py-xs fs-m quicksand"
      onClick={appendNote}
      >Save</button>
    </div>
  </div>
  )
}

export default AddNote