import React from 'react';
import Navbar from './components/containers/Navbar/Navbar'
import MainContent from './components/containers/MainContent/MainContent'
import './assets/style/css/main.css'
import { StringContextProvider } from './context/genContext'
import { GetPokemonDBContextProvider } from './context/getPokemonDBContext'
import { PaginationContextProvider } from './context/paginationContext'

const App = () => {
  return (
    <GetPokemonDBContextProvider>
      <StringContextProvider>
        <Navbar />
        <PaginationContextProvider>
          <MainContent />
        </PaginationContextProvider>
      </StringContextProvider>
    </GetPokemonDBContextProvider>
  );
}

export default App;