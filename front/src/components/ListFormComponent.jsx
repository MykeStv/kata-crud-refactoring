import React, { useContext, useState } from 'react'
import { useAddList } from '../providers/ContextProvider'



const ListFormComponent = () => {

    const [nameList, setNameList] = useState('')
    const addList = useAddList()

    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que se recargue la pagina al submit

        //Llama a la funcion en TodoList que agrega una nueva lista
        addList(nameList)

        //resetea el stado del form
        setNameList('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='input-list'
                    type="text"
                    placeholder='Ingresa una actividad'
                    value={nameList}
                    onChange={e => setNameList(e.target.value)}
                    required
                />
                <button type="submit" className='new-list'>Nueva Lista</button>
            </form>
        </>
    )
}

export default ListFormComponent