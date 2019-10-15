import React, { useContext, useEffect, useState } from 'react'
import { StringContext } from '../../../context/genContext'

const DisplayString = () => {
    const { selectedData } = useContext(StringContext)
    const [createdString, setCreatedString] = useState('')

    useEffect(() => {
        CreatingString(selectedData)
    }, [selectedData])

    const CreatingString = ({ types, typesSeparator, IVs }) => {
        const typesString = `${types.join(typesSeparator)}`
        const IVsString = `${types.length > 0 && IVs.length > 0 ? '&' : ''}${IVs}`
        setCreatedString(`${typesString}${IVsString}`)
    }

    const content = (
        <div className='row'>
            <div className='col-sm-12'>
                <input type='text' className='form-control m-3' value={createdString} readOnly />
            </div>
        </div>
    )

    return content
}

export default DisplayString