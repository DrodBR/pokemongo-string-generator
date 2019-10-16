import React from 'react'
import DisplayString from './DisplayString'
import Filters from './filters/Filters'
import PokemonSelector from './filters/PokemonSelector'

const MainContent = () => {

    const content = (
        <div className='bg-dark'>
            <div className='container text-light'>
                <DisplayString />
                <div className='row'>
                    <div className='col-sm-4'>
                        <Filters />
                    </div>
                    <div className='col-sm-8'>
                        <PokemonSelector />
                    </div>
                </div>
            </div>
        </div>
    )
    return content
}

export default MainContent