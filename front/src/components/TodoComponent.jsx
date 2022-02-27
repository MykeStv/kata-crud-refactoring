import React from 'react'
import { useTodoFunctions } from '../providers/ContextProvider';

const TodoComponent = ({ todos, listId, editTodo }) => {

    const todoFuntions = useTodoFunctions();

    const deleteTodo = todoFuntions.deleteTodo

    const toggleTodo = todoFuntions.toggleTodo

    const todoDone = {
        textDecoration: 'line-through'
    }


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarea</th>
                    <th>¿Completado?</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo) => (

                        <tr key={todo.id} style={todo.completed ? todoDone : {}} >
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => toggleTodo(listId, todo)}
                                    defaultChecked={todo.completed}
                                />
                            </td>
                            <td>
                                <button onClick={() => editTodo(todo)}>
                                    Editar
                                </button>
                                <button onClick={() => deleteTodo(listId, todo.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoComponent