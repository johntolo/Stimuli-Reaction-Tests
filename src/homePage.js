import './App.css';
import Auditory from './audStim';
import Visual from './visStim';
import {Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <div className='header'><b>Reaction Time Tests</b></div>
      <p className='para'>Choose either Visual or Auditory Stimuli reaction time test</p>
      <Link to = "/visual"><button className='options'>Visual Stimuli</button></Link>
      <Link to = "/audio"><button className='options'>Auditory Stimuli</button></Link>
    </div>
  );
}

export default App;
