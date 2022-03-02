import { createContext,useState,useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [open, setopen] = useState(false);
  const [edit, setedit] = useState(false);
  
  const [noteData, setnoteData] = useState({
    title: "",
    body: "",
    isPinned: false
  });


  const toggle = () => setopen(open=>!open);
  const createNewNote = () => {
    setnoteData(()=>({
      title: "",
      body: "",
      isPinned: false
    }));
    toggle();
    setedit(()=>false);
  }

  return (
    <ModalContext.Provider value={{ open,
    toggle,
    edit,
    setedit,
    noteData, 
    setnoteData,
    createNewNote
    }} >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);
