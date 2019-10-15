import React, { useContext } from 'react'
import { StringContext } from '../../../../context/genContext'
import dataIVs from '../../../../data/IVs.json'

const IVs = () => {
    const { selectedData, setSelectedData } = useContext(StringContext)
    const allIVs = dataIVs.IVs

    const updateStars = event => {
        console.log(selectedData.IVs)
        if (!selectedData.IVs.includes(`${event.target.value}*`)) {
            setSelectedData({ ...selectedData, IVs: selectedData.IVs.concat(`${event.target.value}*`) })
            document.getElementById(`${event.target.value}stars`).classList.add("opacity-1")
        } else {
            setSelectedData({ ...selectedData, IVs: selectedData.IVs.filter(el => el !== `${event.target.value}*`) })
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
        <>
            <h2>IV</h2>
            {allIVs.map((obj, index) => {
                return (
                    <div className="custom-control custom-checkbox m-1">
                        <input type="checkbox" className="custom-control-input"
                            id={`${obj.stars}-star`} value={obj.stars} onClick={updateStars} />
                        <label className="custom-control-label" for={`${obj.stars}-star`}>
                            {drawStars(obj.stars)} {obj.stars !== 4 ? `(${obj.min * 100}% - ${obj.max * 100}%)` : `(${obj.max * 100}%)`}
                        </label>
                    </div>
                )
            })}
        </>
    )
    return content
}

export default IVs