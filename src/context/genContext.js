import React, { createContext, useState } from "react";

const StringContext = createContext();

const StringContextProvider = props => {
    const [string, setString] = useState('');

    return (
        <StringContext.Provider value={{ string, setString }}>
            {props.children}
        </StringContext.Provider>
    );
};

export { StringContext, StringContextProvider };