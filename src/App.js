import './App.css';
import Main from './layout/Main';
import Sidebar from './layout/Sidebar';
import AddNote from './components/AddNote';
import { ModalProvider } from './context/modal-context';
import { NotelistProvider } from './context/allnotes-context';
function App() {
  return (
    <div className="App grid">
      <NotelistProvider>
        <ModalProvider>
          <Sidebar />
          <Main />
          <AddNote />
        </ModalProvider>
      </NotelistProvider>
    </div>
  );
}

export default App;
