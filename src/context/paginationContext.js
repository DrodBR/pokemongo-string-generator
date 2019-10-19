import React, { createContext, useState } from "react"


const PaginationContext = createContext()

const PaginationContextProvider = props => {

    const [pagination, setPagination] = useState(
        {
            "min": 0,
            "max": 10
        }
    )

    return (
        <PaginationContext.Provider value={{ pagination, setPagination }}>
            {props.children}
        </PaginationContext.Provider>
    );
};

export { PaginationContext, PaginationContextProvider }