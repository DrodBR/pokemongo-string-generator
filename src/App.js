import React from 'react';
import './App.css';
import Navbar from './components/containers/Navbar/Navbar'
import MainContent from './components/containers/MainContent/MainContent'
import './assets/style/css/main.css'
import { StringContextProvider } from './context/genContext'

const App = () => {
  return (
    <StringContextProvider>
      <Navbar />
      <MainContent />
    </StringContextProvider>
  );
}

export default App;