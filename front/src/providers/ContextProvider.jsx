import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { ACTIONS, URL } from '../others/Consts'


//Se crea un contexto para el api
const ApiContext = createContext()
const AddListContext = createContext()
const DeleteListContext = createContext()
const TodoFunctionsContext = createContext()

export function useListState() {
    return useContext(ApiContext)
}
export function useAddList() {
    return useContext(AddListContext)
}
export function useDeleteList() {
    return useContext(DeleteListContext)
}
export function useTodoFunctions() {
    return useContext(TodoFunctionsContext)
}

const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.GET_LISTS:
            return [action.payload.lists]

        case ACTIONS.ADD_LIST:
            return [...lists, action.payload.list]

        case ACTIONS.UPDATE_LIST:
            return [...lists, action.payload.lists]

        case ACTIONS.DELETE_LIST:
            return lists.filter(list => list.id !== action.payload.id)

        case ACTIONS.ADD_TODO:
            return lists.map(list => {
                if (list.id === action.payload.listId) {
                    return [...list.todo, action.payload.todo]
                    // return list.todo.push(action.payload.todo)
                } else {
                    return list
                }

            })

        case ACTIONS.DELETE_TODO:
            return lists.map(list => {
                if (list.id === action.payload.listId) {
                    return list.todo.filter(todo => todo.id !== action.payload.todoId)
                } else {
                    return list
                }
            })

        case ACTIONS.UPDATE_TODO:
            return lists.map(list => {
                if (list.id === action.payload.list.id) {
                    return action.payload.list
                }
                else {
                    return list
                }
                /* if (list.id === action.payload.list.id) {
                    return list.todo.map(todo => {
                        if (todo.id === action.payload.todo.id) {
                            return action.payload.todo
                        }
                    })

                } */
            })

        default:
            return lists
    }



}



//Funcion que provee el contexto
export function ContextProvider({ children }) {

    const [lists, dispatch] = useReducer(reducer, [])
    const [listState, setListState] = useState(lists)
    // console.log(listState);

    //Trae la info de la base de datos
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

    //Funcion para agregar una lista
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

    //Funcion para eliminar una lista
    const deleteList = (listId) => {

        fetch(URL + '/' + listId, {
            method: 'DELETE'
        }).then(() => {
            dispatch({ type: ACTIONS.DELETE_LIST, payload: { id: listId } })
        })
    }

    const addTodo = (listId, name) => {
        console.log(listId)

        const req = {
            id: null,
            name: name,
            completed: false
        }

        fetch(URL + '/' + listId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        }).then(res => res.json())
            .then(list => dispatch({ type: ACTIONS.ADD_TODO, payload: { listId: listId, todo: list.todo } }))
    }

    const deleteTodo = (listId, todoId) => {
        fetch(URL + '/todo/' + todoId, {
            method: 'DELETE'
        }).then(() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { listId: listId, todoId: todoId } })
        })
    }

    const updateTodo = (listId, todo) => {
        // console.log(todo.id);
        const req = {
            id: todo.id,
            name: todo.name,
            completed: todo.completed
        }

        fetch(`${URL}/${listId}/todo-update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        }).then(res => res.json())
            .then(list => {
                dispatch({ type: ACTIONS.UPDATE_TODO, payload: { list: list, todo: todo } })
            })

    }


    const toggleTodo = (listId, todo) => {

        todo.completed = !todo.completed

        updateTodo(listId, todo)


    }

    return (
        <ApiContext.Provider value={listState}>
            <AddListContext.Provider value={addList}>
                <DeleteListContext.Provider value={deleteList}>
                    <TodoFunctionsContext.Provider value={{ addTodo, deleteTodo, toggleTodo, updateTodo }}>
                        {children}
                    </TodoFunctionsContext.Provider>
                </DeleteListContext.Provider>
            </AddListContext.Provider>
        </ApiContext.Provider>

    )
}


