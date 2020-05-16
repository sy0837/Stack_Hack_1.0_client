import React from 'react'
import {
    makeStyles,
    TextField,
    FormControl,
    Grid,
    Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
        marginTop: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))

export default () => {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <FormControl fullWidth noValidate autoComplete="off" >
                        <TextField id="standard-basic" label="Add Todo" />
                    </FormControl>
                </Grid>

                <Grid item xs={1}>
                    <Button 
                    color="secondary" 
                    className={classes.button}
                    variant="outlined"
                    >
                        Add
                    </Button>
                </Grid>

            </Grid>

        </div>
    )
}