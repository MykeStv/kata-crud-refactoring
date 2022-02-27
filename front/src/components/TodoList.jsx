import React, { useContext, useEffect, useReducer, useState } from 'react'
import ListComponent from './ListComponent';
import ListFormComponent from './ListFormComponent';

import { useListState } from '../providers/ContextProvider';
// import { ApiContext } from '../providers/ContextProvider';








const TodoList = () => {

    const lists = useListState()
    console.log(lists)


    return (
        <>
            <h1>To-Do List</h1>
            <ListFormComponent />
            {
                lists.map(list => (
                    <ListComponent key={list.id} list={list} />
                ))
            }

        </>
    )
}

export default TodoList