import { createContext,useState,useContext } from "react";

const AllNotesContext = createContext();

export const NotelistProvider = ({children}) => {
  const [notelist, setnoteList] = useState([]);
  const [showOnlyPinnedNotes,setshowOnlyPinnedNotes] = useState(false);

  return (
    <AllNotesContext.Provider value={{notelist,setnoteList,showOnlyPinnedNotes,setshowOnlyPinnedNotes }} >
      {children}
    </AllNotesContext.Provider>
  )
}

export const useNotelist = () => useContext(AllNotesContext);
