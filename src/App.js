import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Generator from './components/Generator'
import './assets/style/css/main.css'
import { StringContextProvider } from './context/genContext'

const App = () => {
  return (
    <StringContextProvider>
      <Navbar />
      <Generator />
    </StringContextProvider>
  );
}

export default App;