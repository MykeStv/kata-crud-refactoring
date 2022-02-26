import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const AddListForm = (props) => {

    const [list, setList] = useState('');

    const { register, handleSubmit } = useForm();

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log(list);
        setList('')
    } */

    const onSubmit = (data, e) => {
        console.log(data);

        props.addList(data);



        e.target.reset();
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder='Ingresa una actividad'
                {
                ...register('name', { required: true, minLength: 3 })
                }
            // required
            // minLength={2}
            />
            <button type="submit" className='new-list'>Nueva Lista</button>
        </form>
    )
}

export default AddListForm;