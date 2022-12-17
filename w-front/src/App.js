import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App_body">
        <Sidebar/>
        <Chat/>
      </div>
      
    </div>
  );
}

export default App;
