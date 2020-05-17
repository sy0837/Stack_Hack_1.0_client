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
        marginTop: theme.spacing(1)
    },
    main: {
        padding: theme.spacing(1)
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
                                <Grid item sm={3} className={classes.main}>
                                    <Typography>
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