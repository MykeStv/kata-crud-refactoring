import React from 'react'

const TodoTable = () => {
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
                <tr>
                    <td>1</td>
                    <td>Dormir</td>
                    <td>
                        <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TodoTable