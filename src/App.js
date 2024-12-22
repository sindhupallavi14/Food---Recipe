import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';
import { Favorites } from './pages/favorites/fav';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/navbar/navbar';

function App() {
  return (
    <div>
       <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
       </div>  
    </div>
  );
}

export default App;
