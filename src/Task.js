import React from 'react';


const Task = (props) => {

    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.dueBy}</p>
        </div>
    );
}

export default Task;