import React from 'react'
import AddTodo from './AddTodo'
import TodoTable from './TodoTable'

const ListGomponet = (props) => {

    console.log(props.lists);

    return (
        <div className='list-group'>
            <div>
                <h3>component</h3>
                <button>Eliminar</button>
            </div>


            <div>
                <AddTodo />
                <TodoTable />
            </div>
        </div>
    )
}

export default ListGomponet