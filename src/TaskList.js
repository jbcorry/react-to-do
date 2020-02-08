import React from 'react';
import Task from './Task.js';
import {useSelector, useDispatch} from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    return(
        <div>
            {tasks.map(task => (
                <Task name={task.name} dueBy={task.dueBy} key={task.id} />
            ))}
        </div>
    );
}

export default TaskList;