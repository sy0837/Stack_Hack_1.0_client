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
        
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderBottom : 'solid 1px #000',
        paddingTop : '16px',
        paddingLeft : '20px',
        paddingRight : '20px',
        paddingBottom : '16px'
        
    },
    main: {
        marginTop: theme.spacing(1),
    },
    border: {
        padding: '2px'
    },
    button :{
        background: '#FE6B8B',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop : '0'
    },
    // paper :{
    //     boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    // }
    typo :{
        marginTop : '10px'
    }
}))

export default (props) => {
    const classes = useStyle()
    return (
        <div className={classes.main}>
            <Paper variant="outlined" className={classes.paper} >
                {props.todos.map(todo => {
                    if (props.listId === todo.list_id) {
                        return (
                            <div key={todo._id} className={classes.root} >
                                <Grid container spacing={2}>
                                    <Grid item xs={11}>
                                        {
                                            <Typography className={classes.typo}>
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