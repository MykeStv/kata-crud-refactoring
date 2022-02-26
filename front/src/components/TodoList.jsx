import React, { useContext, useReducer } from 'react'
import ListComponent from './ListComponent';
import ListFormComponent from './ListFormComponent';
import { ApiContext, URL } from '../providers/ContextProvider'

export const ACTIONS = {

    ADD_LIST: 'add-list',

}


const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.ADD_LIST:
            const res = addListApi(action.payload.name)
            change = !change;
            return [...lists, res]
    }
}

const addListPromise = async (req) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }).then(res => res.json())

    return await res;
}

const addListApi = (name) => {

    // console.log(name)

    const req = {
        id: null,
        name: name,
        todo: []
    };

    const res = addListPromise(req)
    console.log(res);

    return res;
    // .then(listTodos => dispatch({ type: ACTIONS.ADD_LIST, payload: listTodos }))
}


const TodoList = () => {

    const listsApi = useContext(ApiContext)
    const [lists, dispatch] = useReducer(reducer, listsApi)

    const addList = (name) => {
        dispatch({ type: ACTIONS.ADD_LIST, payload: { name: name } })
    }


    return (
        <>
            <h1>To-Do List</h1>
            <ListFormComponent addList={addList} />
            {
                listsApi.map(list => (
                    <ListComponent key={list.id} list={list} />
                ))
            }

        </>
    )
}

export default TodoList