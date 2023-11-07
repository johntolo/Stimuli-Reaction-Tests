import './App.css';
import Auditory from './audStim';
import Visual from './visStim';
import {Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './homePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/visual" element = {<Visual/>}/>
          <Route path = "audio" element = {<Auditory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
