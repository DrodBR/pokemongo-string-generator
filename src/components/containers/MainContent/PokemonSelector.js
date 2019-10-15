import React, { useEffect, useState } from 'react'

const PokemonSelector = () => {
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30')
            const data = await response.json()
            setPokemonData(data.results)
        }
        fetchData()
    }, [])

    const content = (
        <>
            <h1>Pokémon</h1>
            {pokemonData.map((obj, index) => {
                const pokemonNumber = (index+1).toString().padStart(3,'0')
                return <div key={index}>
                    {`#${pokemonNumber} - ${obj.name.toUpperCase()}`}
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`} />
                </div>
            })}
        </>
    )

    return content
}

export default PokemonSelector