import './App.css';
import Income from './components/Income';
import Profile from './components/Profile';
import Rightbar from './components/Rightbar';
import Strategy from './components/Strategy';

function App() {
  return (
    <div className="App">
     <Rightbar />
     <Profile/>
     <Income/>
     <Strategy/>
    </div>
  );
}

export default App;
