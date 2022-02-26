import React, { useEffect, useState } from 'react'

//Se crea un contexto para el api
export const ApiContext = React.createContext()

export const URL = 'http://localhost:8080/list';

//Funcion que provee el contexto
export function ContextProvider({ children }) {

    const [lists, setLists] = useState([])

    useEffect(() => {

        const getData = async () => {
            //Trae la data de la api
            const DATA = await fetch(URL)
                .then(res => res.json());
            console.log(DATA);
            setLists(DATA)
        }

        getData()

    }, [])

    return (
        <ApiContext.Provider value={lists}>
            {children}
        </ApiContext.Provider>

    )
}


