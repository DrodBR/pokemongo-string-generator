import React from 'react'
import Type from '../filters/Type'

const Sidebar = () => {
    const content = (
        <div className='row'>
            <div className='col-sm-4'>
                <h1>Filter</h1>
                <Type />
                {/* <h2>Type</h2>
                        {allTypes.map((obj, index) => {
                            return <button className={`btn btn-sm ${obj}`} id={`button-${obj}`} value={obj} onClick={updateType}>{obj.toUpperCase()}</button>
                        })}
                        <div className="custom-control custom-switch m-1">
                            <input className="custom-control-input" type="checkbox" id="typeSeparator" onClick={(e) => { e.target.checked ? setTypeSeparator('&') : setTypeSeparator(',') }} />
                            <label className="custom-control-label" for="typeSeparator">Combine</label>
                        </div> */}
                {/* <h2>IV</h2>
                        {allIVs.map((obj, index) => {
                            return (
                                <div className="custom-control custom-checkbox m-1">
                                    <input type="checkbox" className="custom-control-input" id={`${obj.stars}-star`} value={obj.stars} onClick={updateStars} />
                                    <label className="custom-control-label" for={`${obj.stars}-star`}>
                                        {drawStars(obj.stars)} {obj.stars !== 4 ? `(${obj.min * 100}% - ${obj.max * 100}%)` : `(${obj.max * 100}%)`}
                                    </label>
                                </div>
                            )
                        })} */}
            </div>
        </div>

    )
    return content
}

export default Sidebar