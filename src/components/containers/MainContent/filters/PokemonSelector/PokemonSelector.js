import React, { useEffect, useState, useContext } from 'react'
import { StringContext } from '../../../../../context/genContext'
import { GetPokemonDBContext } from '../../../../../context/getPokemonDBContext'
import { PaginationContext } from '../../../../../context/paginationContext'
import Pagination from './Pagination'

const PokemonSelector = () => {
    const [filteredPokemonData, setFilteredPokemonData] = useState([])
    const [searchString, setSearchString] = useState('')
    const { selectedData, setSelectedData } = useContext(StringContext)
    const { pokemonDB } = useContext(GetPokemonDBContext)
    const { pagination } = useContext(PaginationContext)

    const updatePokemonSelection = number => {
        if (!selectedData.pokemons.includes(number)) {
            setSelectedData({ ...selectedData, pokemons: selectedData.pokemons.concat(number) })
        } else {
            setSelectedData({ ...selectedData, pokemons: selectedData.pokemons.filter(el => el !== number) })
        }
    }

    useEffect(() => {
        setFilteredPokemonData(pokemonDB.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1))
    }, [searchString, pokemonDB])

    const content = (
        <>
            <div className='container'>
                <div className='row'>
                    <h1>Pokémon</h1>
                </div>
                <div className='row'>
                    <input type='text' className='form-control' placeholder='search by name...' value={searchString} onChange={e => setSearchString(e.target.value)} />
                </div>
                <div className='d-flex flex-row-reverse mt-4'>
                    <Pagination filteredLength={filteredPokemonData.length} string={searchString} />
                </div>
                <div className='row'>
                    {pokemonDB.length === 0 ?
                        <span className='centralize'>Loading...</span> :
                        filteredPokemonData.slice(pagination.min, pagination.max).map((obj, index) => {
                            const pokemonNumber = (obj.number).toString().padStart(3, '0')
                            return (
                                <div key={index} className={`col-sm-12 pokemon-box ${obj.types[0]}`} onClick={() => { updatePokemonSelection(obj.number) }}>
                                    <div className='row'>
                                        <div className='w-25 centralize'>
                                            <img className='pokemon-thumb' alt={obj.name.toUpperCase()} src={obj.sprint} />
                                        </div>
                                        <div className='w-50 centralize'>
                                            <span className='capitalize pokemon-name font-inner-shadow'>{obj.name}</span>
                                            {obj.types.map((obj, index) => {
                                                return <div key={index} className='capitalize text-dark'>{obj}</div>
                                            })}
                                        </div>
                                        <div className='w-25 centralize'>
                                            <span className='pokemon-number font-inner-shadow'>{`#${pokemonNumber}`}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
    return content
}
export default PokemonSelector