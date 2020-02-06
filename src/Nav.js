import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const navStyle = {
        color: 'white'
    }

    return(
        <nav>
            <h3>To-Do List</h3>
            <p>Number of Tasks: TASK LENGTH</p>
            <div>
                <Link style={navStyle} to="/">
                    Back to List
                </Link>
                
                <Link style={navStyle} to="/completed-tasks">
                    Completed Tasks
                </Link>
            </div>
        </nav>
    );
}

export default Nav;