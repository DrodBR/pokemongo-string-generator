import React, { createContext, useState, useEffect } from "react"

const GetPokemonDBContext = createContext()

const GetPokemonDBContextProvider = props => {

    const [pokemonDB, setPokemonDB] = useState([])
    const [typesDB, setTypesDB] = useState([])

    useEffect(() => {
        const fetchTypes = async (max) => {
            for (let i = 0; i < max; i++) {
                const pokemonTypes = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
                const data = await pokemonTypes.json()
                const types = data.types.map((obj) => obj.type.name)
                const addOne = typesDB.push(types)
                setTypesDB(addOne)
            }
        }

        const fetchData = async () => {
            const maxPokemon = 580; // max: 580

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${maxPokemon}`)
            const data = await response.json()

            await fetchTypes(maxPokemon)

            setPokemonDB(data.results.map((obj, index) => {
                const pokemonNumber = (index + 1).toString().padStart(3, '0')
                const addObj = ({
                    number: Number(pokemonNumber),
                    name: obj.name,
                    sprint: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`,
                    types: typesDB[index]
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