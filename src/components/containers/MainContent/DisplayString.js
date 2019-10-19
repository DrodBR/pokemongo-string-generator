import React, { useContext, useEffect, useState } from 'react'
import { StringContext } from '../../../context/genContext'

const DisplayString = () => {
    const { selectedData } = useContext(StringContext)
    const [createdString, setCreatedString] = useState('')

    useEffect(() => {
        CreatingString(selectedData)
    }, [selectedData])

    const CreatingString = ({ types, typesSeparator, IVs, pokemons }) => {
        const pokemonsString = `${pokemons}`
        const IVsString = `${IVs}`
        const typesString = `${types.join(typesSeparator)}`

        setCreatedString([pokemonsString, IVsString, typesString].filter(Boolean).join('&'))
    }

    const content = (
        <div className='row'>
            <div className='col-sm-12'>
                <div className='string-container bg-dark'>
                    <input type='text' className='form-control mt-3' value={createdString} readOnly />
                </div>
            </div>
        </div>
    )

    return content
}

export default DisplayString