import React, { createContext, useState, useEffect } from 'react';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    [details, setDetails] = useState([])

    useEffect(() => {
        fetch('../data/resume.json')
        .then((r) => r.json())
        .then((details) => {
            console.log(details);
            setDetails(details);
        })
        .catch((error) => console.error('Error fetching details:', error));
    }, []);


    return (
        <AppContext.Provider
            value={{
                details
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return React.useContext(AppContext);
};