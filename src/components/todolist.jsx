import React from 'react'


export default (props) => {

    return (
        <div>
            {props.todos.map(todo=> (
                <div key={todo._id}>
                    {todo.name}
                </div>
            ))}
        </div>
    )
}