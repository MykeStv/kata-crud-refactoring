import React from 'react'
import { useTodoFunctions } from '../providers/ContextProvider';

const TodoComponent = ({ todos, listId, editTodo }) => {

    const todoFuntions = useTodoFunctions();

    const deleteTodo = todoFuntions.deleteTodo

    const toggleTodo = todoFuntions.toggleTodo

    const todoDone = {
        textDecoration: 'line-through',
        color: 'rgba(240, 228, 240, 0.75)'
    }


    return (
        <div className='container todo-table'>
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
                                        className='todo-check'
                                        type="checkbox"
                                        onChange={() => toggleTodo(listId, todo)}
                                        defaultChecked={todo.completed}
                                    />
                                </td>
                                <td>
                                    <button className='btn btn-edit' onClick={() => editTodo(todo)}>
                                        Editar
                                    </button>
                                    <button className='btn btn-delete' onClick={() => deleteTodo(listId, todo.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoComponent