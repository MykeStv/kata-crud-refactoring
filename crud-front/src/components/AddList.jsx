import React, { useState } from 'react';

const AddList = () => {

    const [list, setList] = useState();


    return (
        <form action="">
            <input type="text" placeholder='Ingresa una actividad' />
            <button type="submit">Nueva Lista</button>
        </form>
    )
}

export default AddList;