import React from 'react'
import {
    makeStyles,
    Paper,
    Typography,
    Grid,
    Fab,
 
} from '@material-ui/core'
import {
    Delete
} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        
    },
    main: {
        marginTop: theme.spacing(1),
    },
    border: {
        padding: '8px'
    },
    button :{
        background: '#FE6B8B',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        {
                                            <Typography>
                                                {todo.name}
                                            </Typography>}
                                    </Grid>

                                    <Grid item xs={1}>
                                        <Fab
                                            className={classes.button}
                                            size="small"
                                            color="secondary"
                                            onClick={()=> {props.btn(todo._id)}}
                                        >
                                            <Delete />
                                        </Fab>
                                    </Grid>

                                </Grid>

                            </div>
                        )
                    }
                })}
            </Paper>
        </div>
    )
}