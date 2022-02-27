import React from 'react'
import ListComponent from './ListComponent';
import ListFormComponent from './ListFormComponent';

import { useListState } from '../providers/ContextProvider';


const TodoList = () => {

    const lists = useListState()



    return (
        <>
            <h1 className='header center-txt'>To-Do List</h1>
            <div className='center-txt'>
                <ListFormComponent />
            </div>
            {
                lists.map(list => (
                    <ListComponent key={list.id} list={list} />
                ))
            }

        </>
    )
}

export default TodoList