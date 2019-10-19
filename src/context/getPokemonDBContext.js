import React, { createContext, useState, useEffect } from "react"

const GetPokemonDBContext = createContext()

const GetPokemonDBContextProvider = props => {

    const [pokemonDB, setPokemonDB] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=580') //580
            const data = await response.json()
            setPokemonDB(data.results.map((obj, index) => {
                const pokemonNumber = (index + 1).toString().padStart(3, '0')
                const addObj = ({
                    number: Number(pokemonNumber),
                    name: obj.name,
                    sprint: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`
                })
                return addObj
            }))
        }
        fetchData()
    }, [])

    return (
        <GetPokemonDBContext.Provider value={{ pokemonDB, setPokemonDB }}>
            {props.children}
        </GetPokemonDBContext.Provider>
    );
};

export { GetPokemonDBContext, GetPokemonDBContextProvider }