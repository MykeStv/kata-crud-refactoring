import React, { useState } from 'react'

const TodoTable = (props) => {

    const [todos, setTodos] = useState(props.todos);

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

                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoTable