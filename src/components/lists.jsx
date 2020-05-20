import React from 'react'
import {
    makeStyles,
    Grid,
    Hidden,
    Typography,
    Paper,
    Fab
} from '@material-ui/core'
import {
    Delete
} from '@material-ui/icons'

const userStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
        
    },
    main: {
        padding: theme.spacing(1.4),
        cursor: 'pointer',
        background: '#',
       
        
    },
    selected: {
        padding : theme.spacing(1.4),
        borderRadius : theme.spacing(5),
        background: ' linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color : "#fff",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    button : {
       background : '#FE6B8B',
       fontSize : '16'
    },
    paper :{
        boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        borderRadius : '20px',
        paddingTop : '16px',
        paddingLeft : '20px',
        paddingRight : '20px',
        paddingBottom : '16px'
    },
    listItem :{
        borderBottom : 'solid 1px #bbb'
    },
  
}))

export default (props) => {
    const classes = userStyle()


    return (
        <div id="lists" className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
                <Hidden xsDown>
                    <Grid container >
                        {props.items.map(item => {
                            return (
                                <Grid container key={item._id} className={classes.listItem} >
                                    <Grid item sm={8} className={classes.main}>
                                        <Typography 
                                            className={(item._id === props.selectedItem) ? classes.selected : null}  
                                            onClick={() => { props.selectedItemHandler(item._id) }}
                                        >
                                            {item.list_name}
                                        </Typography>  
                                    </Grid>
                                    <Grid item sm={4} className={classes.main}>
                                    <Fab
                                            className={classes.button}
                                           
                                            size='small'
                                            color="secondary"
                                            // onClick={()=> {props.btn(todo._id)}}
                                        >
                                            <Delete />
                                        </Fab>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Hidden>
            </Paper>
        </div>
    )
}