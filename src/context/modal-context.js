import { createContext,useState,useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [open, setopen] = useState(false);
  const toggle = () => setopen(open=>!open);
  return (
    <ModalContext.Provider value={{open,toggle }} >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);
