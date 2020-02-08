import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, deleteTask} from './actions'
const dispatch = useDispatch();



const AddTask = () => {
    const addMovie = (e) => {
        e.preventDefault();
        dispatch(addTask({name: e.target.name, dueBy: e.target.dueBy}));
    }

    return(
        <form onSubmit={addTask}>
            <input type="text" name="name"/>
            <input type="text" name="dueBy"/>
            <button>Submit</button>
        </form>
    )
}

export default AddTask;