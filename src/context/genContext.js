import React, { createContext, useState } from "react"
import selectedDataModel from '../data/selectedData.json'

const StringContext = createContext()

const StringContextProvider = props => {

    const [selectedData, setSelectedData] = useState(selectedDataModel)

    return (
        <StringContext.Provider value={{ selectedData, setSelectedData }}>
            {props.children}
        </StringContext.Provider>
    );
};

export { StringContext, StringContextProvider }