import React from 'react'
import DisplayString from './DisplayString'
import Filters from './filters/Filters'
import PokemonSelector from './filters/PokemonSelector/PokemonSelector'

const MainContent = () => {

    const content = (
        <div className='main-bg-2'>
            <div className='container'>
                <DisplayString />
                <div className='row'>
                    <div className='col-sm-3 mt-5'>
                        <Filters />
                    </div>
                    <div className='col-sm-9 mt-5'>
                        <PokemonSelector />
                    </div>
                </div>
            </div>
        </div>
    )
    return content
}

export default MainContent