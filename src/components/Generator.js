import React, { useState, useEffect, useContext } from 'react'
import dataTypes from '../data/types.json'
import dataIVs from '../data/IVs.json'
import { StringContext } from '../context/genContext'

const Generator = () => {

    const { string, setString } = useContext(StringContext)
    const [type, setType] = useState([])
    const [typeSeparator, setTypeSeparator] = useState(',')
    const [selectedIVs, setSelectedIVs] = useState([])
    const allTypes = dataTypes.types.sort()
    const allIVs = dataIVs.IVs

    useEffect(() => {
        setString(`${type.join(typeSeparator)}${type.length > 0 && selectedIVs.length > 0 ? '&' : ''}${selectedIVs}`)
    }, [type, typeSeparator, selectedIVs])

    const updateType = event => {
        if (!type.includes(event.target.value)) {
            setType([...type, event.target.value])
            document.getElementById(`button-${event.target.value}`).classList.add("opacity-1")
        } else {
            setType(type.filter(el => el !== event.target.value))
            document.getElementById(`button-${event.target.value}`).classList.remove("opacity-1")
        }
    }

    const updateStars = event => {
        if (!selectedIVs.includes(`${event.target.value}*`)) {
            setSelectedIVs([...selectedIVs, `${event.target.value}*`])
            document.getElementById(`${event.target.value}stars`).classList.add("opacity-1")
        } else {
            setSelectedIVs(selectedIVs.filter(el => el !== `${event.target.value}*`))
            document.getElementById(`${event.target.value}stars`).classList.remove("opacity-1")
        }
    }

    const drawStars = (stars) => {
        let drawingStars

        if (stars === 0) {
            drawingStars = (<span className='stars stars0-3' id='0stars'><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>)
        } else if (stars === 1) {
            drawingStars = (<span className='stars stars0-3' id='1stars'><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span>)
        } else if (stars === 2) {
            drawingStars = (<span className='stars stars0-3' id='2stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span>)
        } else if (stars === 3) {
            drawingStars = (<span className='stars stars0-3' id='3stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>)
        } else {
            drawingStars = (<span className='stars stars4' id='4stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>)
        }

        return drawingStars
    }

    const content = (
        <div className='bg-dark'>
            <div className='container text-light'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <input type='text' className='form-control m-3' value={string} readOnly />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h1>Filter</h1>
                        <h2>Type</h2>
                        {allTypes.map((obj, index) => {
                            return <button className={`btn btn-sm ${obj}`} id={`button-${obj}`} value={obj} onClick={updateType}>{obj.toUpperCase()}</button>
                        })}
                        <div className="custom-control custom-switch m-1">
                            <input className="custom-control-input" type="checkbox" id="typeSeparator" onClick={(e) => { e.target.checked ? setTypeSeparator('&') : setTypeSeparator(',') }} />
                            <label className="custom-control-label" for="typeSeparator">
                                Combine
                            </label>
                        </div>
                        <h2>IV</h2>

                        {allIVs.map((obj, index) => {
                            return (
                                <div className="custom-control custom-checkbox m-1">
                                    <input type="checkbox" className="custom-control-input" id={`${obj.stars}-star`} value={obj.stars} onClick={updateStars} />
                                    <label className="custom-control-label" for={`${obj.stars}-star`}>
                                        {drawStars(obj.stars)} {obj.stars !== 4 ? `(${obj.min * 100}% - ${obj.max * 100}%)` : `(${obj.max * 100}%)`}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col-sm-8'>
                        <h1>Pokémon</h1>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default Generator