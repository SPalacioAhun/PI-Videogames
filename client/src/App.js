import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './views/create/create';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Landing from './views/landing/landing';


function App() {
  return (
    <div className="App">
    <Routes>

      <Route exact path='/home' element={<Home />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/home/:id' element={<Detail />} />
      <Route path='/create' element={<Create />} />
    
    </Routes>
    </div>
  );
}

export default App;
