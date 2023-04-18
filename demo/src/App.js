import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,romanceMovies} from './Constants/url'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romanceMovies} title='Romantic' isSmall />
    </div>
  );
}

export default App;
