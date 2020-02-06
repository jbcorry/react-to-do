import React from 'react';
import Task from './Task.js';

const TaskList = () => {

    return(
        <div>
            <Task name="Clean Room" dueBy="Tomorrow" key="1" />
            <Task name="Do Dishes" dueBy="Tonight" key="1" />
            <Task name="Eat Food" dueBy="Lunch" key="1" />
        </div>
    );
}

export default TaskList;