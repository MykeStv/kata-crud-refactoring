import React from 'react'


const ListComponent = ({ list }) => {



    return (
        <div className='list-group'>
            <div>
                <h3>{list.name}</h3>
                <button>
                    Eliminar
                </button>
            </div>


            {/* <div>
                <AddTodoForm />
                <TodoTable />
            </div> */}
        </div>
    )
}

export default ListComponent