import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colours[Math.floor(Math.random() * 7)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default Rainbow