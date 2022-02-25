import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoTable from './TodoTable'

const ListGomponet = (props) => {

    // console.log(props.list);
    const [listC, setListC] = useState(props.list);
    console.log(listC.todo);

    const addTodo = (todo) => {
        // console.log(listC.todo);
        setListC(listC.todo.push({ name: todo }))
        console.log(listC);
    }

    return (
        <div className='list-group'>
            <div>
                <h3>{props.list.name}</h3>
                <button onClick={() => props.deleteList(listC.id)}>
                    Eliminar
                </button>
            </div>


            <div>
                <AddTodoForm addTodo={addTodo} />
                <TodoTable todos={listC.todo} />
            </div>
        </div>
    )
}

export default ListGomponet