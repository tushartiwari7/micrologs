import React from 'react'
import { useNotelist } from '../context/allnotes-context'
import { useModal } from '../context/modal-context';
const getNoteBody = (body) => body.length<200? body : `${body.slice(0,150)}...`;
const getNoteTitle = (title) => title.length<20? title : `${title.slice(0,15)}...`;


const Note = ({node}) => {

  const {setnoteList} = useNotelist();
  const {toggle,setedit,setnoteData} = useModal();

  const pinMe = () => {
    setnoteList(list=>list.map(item=>item.id===node.id ? {...item,isPinned: !node.isPinned,priority: node.priority ? 0 : 1}:item ));
  }

  const deleteMe = () => {
    setnoteList(list=>list.filter(item=>item.id!==node.id));
  }

  const editMe = () => {
    setedit(()=>true);
    setnoteData(()=>node);
    toggle();
  }

  return (
    <div className='notes rounded-m full-width card pos-rel'>
      <h3 className='h3 quicksand left mx-xs p-xs note-title flex spread'>{getNoteTitle(node.title)}
      <i className={`bi ${node.isPinned ? "bi-pin-fill" :"bi-pin"}`}
      onClick={pinMe}
      ></i>
      </h3>
      <p className='fs-m left p-xs gray'>
        {getNoteBody(node.body)}
      </p>
      <div className="fs-l flex m-md pos-abs note-crud-btns">
        <button className="btn btn-outline-error rounded-m px-sm py-xs fs-m quicksand"
          onClick={deleteMe}
        >
          Delete
        </button>
        <button className="btn btn-outline-primary rounded-m px-sm py-xs fs-m quicksand"
        onClick={editMe}
        >Edit</button>
      </div>
    </div>
  )
}

export default Note;