import React from 'react'
import {
    Container,
    Grid
} from '@material-ui/core'


export default (props) => {

    return (
        <div>
            {props.todos.map(todo=> (
                <div>
                    {todo.title}
                </div>
            ))}
        </div>
    )
}