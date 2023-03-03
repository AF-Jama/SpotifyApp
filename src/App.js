import logo from './logo.svg';
import { Routes,Route } from 'react-router';
import WelcomePage from './Pages/WelcomePage';
import SideBar from './Components/SideBar';
import Main from './Pages/Main';
import ArtistSearch from './Components/ArtistSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
