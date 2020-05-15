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
                            <Grid container key={item._id}>
                                <Grid item sm={3}>
                                    {item.list_name}
                                    {console.log(item)}
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Hidden>
        </div>
    )
}