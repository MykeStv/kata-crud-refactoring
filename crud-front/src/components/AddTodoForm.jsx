import React, { useState } from 'react'

const AddTodoForm = (props) => {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(todo);
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Ingresa un to-do'
                value={todo}
                onChange={e => setTodo(e.target.value)}
                required
            />
            <button type="submit">Crear</button>
        </form>
    )
}

export default AddTodoForm;