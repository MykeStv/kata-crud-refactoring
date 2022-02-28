import React, { useState } from 'react'
import { useTodoFunctions } from '../providers/ContextProvider';



import TodoComponent from './TodoComponent';

const TodoFormComponent = ({ list }) => {

    const initialTodo = {
        id: null,
        name: '',
        completed: false
    }

    const [todo, setTodo] = useState(initialTodo)
    const [editing, setEditing] = useState(false)

    const todoFunctions = useTodoFunctions()



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        if (todo.id != null || todo.id != undefined) {
            todoFunctions.updateTodo(list.id, todo)
            setEditing(false)
            setTodo(initialTodo);
        } else {
            todoFunctions.addTodo(list.id, todo.name)
            setEditing(false)
            setTodo(initialTodo);
        }

    }

    const editTodo = (todoEdit) => {
        if (todoEdit.id !== todo.id) {
            setTodo(todoEdit)
            setEditing(true)
        } else {
            setEditing(false)
            setTodo(initialTodo)
        }
    }


    return (
        <div className='todo-group'>

            <form className='form-todo' action="" onSubmit={handleSubmit}>
                <input
                    className='input-todo'
                    type="text"
                    placeholder='Ingresa un to-do'
                    value={todo.name}
                    onChange={e => setTodo({ ...todo, name: e.target.value })}
                    required
                />
                {editing && <button type='submit'>Actualizar</button>}
                {!editing && <button type="submit">Crear</button>}
            </form>

            <TodoComponent todos={list.todo} listId={list.id} editTodo={editTodo} />
        </div>
    )
}

export default TodoFormComponent