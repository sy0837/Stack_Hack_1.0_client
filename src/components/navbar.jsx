import React from 'react'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles(theme =>({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: theme.spacing(2),
        color: ' #fff',
        
    },
    Typography:{
        fontFamily : 'Montserrat'
    }
}))
// #FF8E53
export default () => {
    const classes = useStyle()
    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="#000">
                        TODO
                    </Typography>
                </Toolbar>

            </AppBar>

        </div>
    )
}