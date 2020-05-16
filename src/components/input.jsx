import React from 'react'
import {
    makeStyles,
    TextField,
    FormControl,
    Grid,
    Fab
} from '@material-ui/core'
import {
    Add
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
        marginTop: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))

export default (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <FormControl fullWidth noValidate autoComplete="off" >
                        <TextField id="standard-basic" label={props.title} />
                    </FormControl>
                </Grid>

                <Grid item xs={1}>
                    <Fab
                        className={classes.button}
                        size="small"
                        color="secondary">
                        <Add />
                    </Fab>
                </Grid>

            </Grid>

        </div>
    )
}