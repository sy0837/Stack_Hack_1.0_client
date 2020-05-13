import React from 'react'
import {
    makeStyles,
    Grid,
    Hidden
} from '@material-ui/core'

const userStyle = makeStyles(theme => ({
    root: {
        padding: '1.2rem'
    }
}))

export default (props) => {
    const classes = userStyle()


    return (
        <div id="lists" className={classes.root}>
            <Hidden xsDown>
                <Grid container>
                    {props.items.map(item => {
                        return (
                            <Grid container>
                                <Grid item sm={3}>
                                    Item
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Hidden>
        </div>
    )
}