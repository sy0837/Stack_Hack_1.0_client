import React from 'react'
import {
    Container,
    makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    main: {
        marginTop: theme.spacing(1)
    }
}))

export default (props) => {
    const classes = useStyle()
    return (
        <div className={classes.main}>
            {props.todos.map(todo => (
                <div key={todo._id} className={classes.root} >
                    <Container>
                        {todo.name}
                    </Container>
                </div>
            ))}
        </div>
    )
}