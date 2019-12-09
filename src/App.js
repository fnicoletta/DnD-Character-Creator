import React from 'react';
import CharSheet from './components/charsheet.js'
import './App.css';
import 'tachyons'
import './fonts/dungeon.TTF'

function App() {
  return (
    <div className='body bg-light-yellow'>
      <CharSheet/>
    </div>
  );
}

export default App;
