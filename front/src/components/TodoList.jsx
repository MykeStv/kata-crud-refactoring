import React, { useContext, useEffect, useReducer, useState } from 'react'
import ListComponent from './ListComponent';
import ListFormComponent from './ListFormComponent';
import { ACTIONS, URL } from '../others/Consts';
// import { ApiContext } from '../providers/ContextProvider';




const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.GET_LISTS:
            return [action.payload.lists]

        case ACTIONS.ADD_LIST:
            return [...lists, action.payload.list]

        case ACTIONS.UPDATE_LIST:
            return [...lists, action.payload.lists]

        default:
            return lists
    }



}




const TodoList = () => {


    const [lists, dispatch] = useReducer(reducer, [])
    const [listState, setListState] = useState(lists)



    useEffect(() => {

        const getData = async () => {
            //Trae la data de la api
            await fetch(URL)
                .then(res => res.json())
                .then(list => setListState(list))
            // .then(listsApi => dispatch({ type: ACTIONS.GET_LISTS, payload: { lists: listsApi } }))
        }

        getData()

    }, [lists])


    const addList = (name) => {

        const req = {
            id: null,
            name: name,
            todo: []
        };

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        }).then(res => res.json())
            .then(list => dispatch({ type: ACTIONS.ADD_LIST, payload: { list: list } }))

    }


    return (
        <>
            <h1>To-Do List</h1>
            <ListFormComponent addList={addList} />
            {
                listState.map(list => (
                    <ListComponent key={list.id} list={list} />
                ))
            }

        </>
    )
}

export default TodoList