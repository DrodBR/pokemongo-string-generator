import React from 'react';
import Navbar from './components/containers/Navbar/Navbar'
import MainContent from './components/containers/MainContent/MainContent'
import './assets/style/css/main.css'
import { StringContextProvider } from './context/genContext'
import { GetPokemonDBContextProvider } from './context/getPokemonDBContext'

const App = () => {
  return (
    <GetPokemonDBContextProvider>
      <StringContextProvider>
        <Navbar />
        <MainContent />
      </StringContextProvider>
    </GetPokemonDBContextProvider>
  );
}

export default App;