import React from 'react'

import Type from './Type'
import IVs from './IVs'
import Others from './Others'

const Filters = () => {

    const content = (
        <>
            <h1>Filter</h1>
            <Type />
            <IVs />
            <Others />
        </>
    )
    return content
}

export default Filters