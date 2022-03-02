import { createContext,useState,useContext } from "react";

const AllNotesContext = createContext();

export const NotelistProvider = ({children}) => {
  const [notelist, setnoteList] = useState([]);

  return (
    <AllNotesContext.Provider value={{notelist,setnoteList }} >
      {children}
    </AllNotesContext.Provider>
  )
}

export const useNotelist = () => useContext(AllNotesContext);
