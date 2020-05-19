import React from 'react'
import {
    makeStyles,
    Grid,
    Hidden,
    Typography,
    Paper
} from '@material-ui/core'

const userStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
        
    },
    main: {
        padding: theme.spacing(1),
        cursor: 'pointer',
        background: '#',
       
        
    },
    selected: {
        padding : theme.spacing(2),
        borderRadius : theme.spacing(5),
        background: ' linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color : "#fff",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}))

export default (props) => {
    const classes = userStyle()


    return (
        <div id="lists" className={classes.root}>
            <Paper variant="outlined">
                <Hidden xsDown>
                    <Grid container>
                        {props.items.map(item => {
                            return (
                                <Grid container key={item._id}>
                                    <Grid item sm={5} className={classes.main}>
                                        <Typography
                                            className={(item._id === props.selectedItem) ? classes.selected : null}
                                            onClick={() => { props.selectedItemHandler(item._id) }}
                                        >
                                            {item.list_name}
                                        </Typography>
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