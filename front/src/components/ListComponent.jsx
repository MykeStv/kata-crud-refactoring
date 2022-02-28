import React, { useState } from 'react'
import { useDeleteList } from '../providers/ContextProvider'
import TodoFormComponent from './TodoFormComponent'


const ListComponent = ({ list }) => {

    const deleteList = useDeleteList()


    return (
        <div className='list-group'>

            <div className='list-header'>
                <h3>{list.name}</h3>
                <button onClick={() => deleteList(list.id)}>
                    Eliminar
                </button>
            </div>
            <div className='todo-component'>
                <TodoFormComponent list={list} listId={list.id} />
                {/* <TodoComponent todos={list.todo} listId={list.id} editTodo={activateEdit} /> */}
            </div>

        </div>
    )
}

export default ListComponent