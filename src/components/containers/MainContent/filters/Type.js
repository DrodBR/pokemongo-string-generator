import React, { useContext } from 'react'
import { StringContext } from '../../../../context/genContext'
import dataTypes from '../../../../data/types.json'

const Type = () => {
    const { selectedData, setSelectedData } = useContext(StringContext)
    const allTypes = dataTypes.types.sort()

    const updateType = event => {
        if (!selectedData.types.includes(event.target.value)) {
            setSelectedData({...selectedData, types: selectedData.types.concat(event.target.value)})
            document.getElementById(`button-${event.target.value}`).classList.add("opacity-1")
        } else {
            setSelectedData({...selectedData, types: selectedData.types.filter(el => el !== event.target.value)})
            document.getElementById(`button-${event.target.value}`).classList.remove("opacity-1")
        }
    }

    const updateTypesSeparator = event => {
        if(event.target.checked) {
            setSelectedData({...selectedData, typesSeparator: '&'})
        } else {
            setSelectedData({...selectedData, typesSeparator: ','})
        }
    }

    const content = (
        <>
            <h2>Type</h2>
            {allTypes.map((obj, index) => {
                return <button key={index} className={`btn btn-sm ${obj}`} id={`button-${obj}`} value={obj} onClick={updateType}>{obj.toUpperCase()}</button>
            })}
            <div className="custom-control custom-switch m-1">
                <input className="custom-control-input" type="checkbox" id="typeSeparator" onClick={(e) => { updateTypesSeparator(e) }} />
                <label className="custom-control-label" for="typeSeparator">Combine</label>
            </div>
        </>
    )
    return content
}

export default Type