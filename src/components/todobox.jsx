import React from 'react'
import {
    makeStyles,
    Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
        textAlign: 'left',
        
    }
}))

export default (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                {props.children}
            </Grid>
        </div>
    )
}