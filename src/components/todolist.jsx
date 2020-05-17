import React from 'react'
import {
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    main: {
        marginTop: theme.spacing(1),
    },
    border: {
        padding: '8px'
    }
}))

export default (props) => {
    const classes = useStyle()
    return (
        <div className={classes.main}>
            <Paper variant="outlined" >
                {props.todos.map(todo => {
                    if (props.listId === todo.list_id) {
                        return (
                            <div key={todo._id} className={classes.root} >
                                <Typography>
                                    {todo.name}
                                </Typography>
                            </div>
                        )
                    }
                })}
            </Paper>
        </div>
    )
}