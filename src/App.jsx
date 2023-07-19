import './App.css';
import Header from './Header/Header';
import {Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import AllGames from './AllGames/AllGames';
import Shooters from './Shooters/Shooters';
import MMORPG from './MMORPG/MMORPG';
import Strategy from './Strategy/Strategy';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/AllGames' element={<AllGames/>}></Route>
      <Route path='/Shooters' element={<Shooters/>}></Route>
      <Route path='/MMORPG' element={<MMORPG/>}></Route>
      <Route path='/Strategy' element={<Strategy/>}></Route>
    </Routes>
    </>
  );
}

export default App;
