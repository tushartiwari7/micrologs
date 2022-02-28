import './App.css';
import Main from './layout/Main';
import Sidebar from './layout/Sidebar';
function App() {
  return (
    <div className="App grid">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
