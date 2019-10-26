import React, { useContext } from 'react'
import { StringContext } from '../../../../context/genContext'

const Others = () => {

    const { selectedData, setSelectedData } = useContext(StringContext)

    const updateShiny = ({ shiny }) => {
        setSelectedData({ ...selectedData, shiny: !shiny })
    }

    const updateLegendary = ({ legendary }) => {
        setSelectedData({ ...selectedData, legendary: !legendary })
    }

    const content = (
        <>
            <h2>Others</h2>
            <div className="custom-control custom-switch m-1">
                <input className="custom-control-input" type="checkbox" id="shiny" onClick={(event) => { updateShiny(selectedData) }} />
                <label className="custom-control-label" for="shiny">Shiny</label>
            </div>
            <div className="custom-control custom-switch m-1">
                <input className="custom-control-input" type="checkbox" id="legendary" onClick={() => { updateLegendary(selectedData) }} />
                <label className="custom-control-label" for="legendary">Legendary</label>
            </div>
        </>
    )

    return content

}

export default Others