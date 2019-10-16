import React, { useEffect, useState, useContext } from 'react'
import { StringContext } from '../../../../context/genContext'

const PokemonSelector = () => {
    const [pokemonData, setPokemonData] = useState([])
    const { selectedData, setSelectedData } = useContext(StringContext)
    const firstPokemon = 1
    const lastPokemon = 15

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${firstPokemon - 1}&limit=${lastPokemon - firstPokemon + 1}`)
            const data = await response.json()
            setPokemonData(data.results)
        }
        fetchData()
    }, [])

    const updatePokemonSelection = number => {
        if (!selectedData.pokemons.includes(number)) {
            setSelectedData({ ...selectedData, pokemons: selectedData.pokemons.concat(number) })
        } else {
            setSelectedData({ ...selectedData, pokemons: selectedData.pokemons.filter(el => el !== number) })
        }
    }

    const content = (
        <>
            <h1>Pokémon</h1>
            <div className='container'>
                {pokemonData.map((obj, index) => {
                    const pokemonNumber = (firstPokemon + index).toString().padStart(3, '0')
                    return (
                        <div key={index} className='row pokemon-box' onClick={() => { updatePokemonSelection(firstPokemon + index) }}>
                            <div className='col-sm-2 text-center'>
                                <img className='pokemon-thumb' alt={obj.name.toUpperCase()}
                                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`} />
                            </div>
                            <div className='col-sm-7 text-center'>
                                <span className='capitalize pokemon-name font-inner-shadow'>{obj.name}</span>
                            </div>
                            <div className='col-sm-3 text-right'>
                                <span className='pokemon-number font-inner-shadow'>{`#${pokemonNumber}`}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
    return content
}
export default PokemonSelector