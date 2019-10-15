import react, { useState, useContext } from 'react'
import { StringContext } from '../../context/genContext'
import dataTypes from '../data/types.json'

const Type = () => {
    const { string, setString } = useContext(StringContext)
    const allTypes = dataTypes.types.sort()

    const content = (
        <>
            <h2>Type</h2>
            {allTypes.map((obj, index) => {
                return <button className={`btn btn-sm ${obj}`} id={`button-${obj}`} value={obj} onClick={updateType}>{obj.toUpperCase()}</button>
            })}
            <div className="custom-control custom-switch m-1">
                <input className="custom-control-input" type="checkbox" id="typeSeparator" onClick={(e) => { e.target.checked ? setTypeSeparator('&') : setTypeSeparator(',') }} />
                <label className="custom-control-label" for="typeSeparator">Combine</label>
            </div>
        </>
    )
    return content
}

export default Type