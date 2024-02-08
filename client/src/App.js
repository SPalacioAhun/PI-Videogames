import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './views/create/create';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Landing from './views/landing/Landing';
import AddGame from './views/AddGame/AddGame';



function App() {
  return (
    <div className="App">
    <Routes>

      <Route exact path='/home' element={<Home />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/home/:id' element={<Detail />} />
      <Route path='/create' element={<Create />} />
      <Route path="/addgame" element={<AddGame />} />
      
    
    </Routes>
    </div>
  );
}

export default App;
