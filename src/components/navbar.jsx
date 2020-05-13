import React from 'react'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles(theme =>({
    root: {
        padding: theme.spacing(2)
    }
}))

export default () => {
    const classes = useStyle()
    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        TODO
                    </Typography>
                </Toolbar>

            </AppBar>

        </div>
    )
}