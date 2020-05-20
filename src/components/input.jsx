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
        // padding: `${theme.spacing(2)} ${theme.spacing()}`,
        marginTop: theme.spacing(1),
        paddingTop : '16px',
        paddingBottom : '26px',
        paddingLeft : '32px',
        paddingRight : '12px',
        boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        borderRadius : '20px',
     
    },
    button: {
        marginTop: '10px',
        background: ' #FE6B8B',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
    },
 
    
   
}))

export default (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container spacing={2}>
            {/* <h6>To add Todo Catergories</h6> */}
                <Grid item xs={11}>
               
                    <FormControl fullWidth noValidate autoComplete="off" >
                        <TextField
                            value={props.value}
                            onChange={props.handler}
                            id="standard-basic"
                            label={props.title}
                            variant= 'outlined'
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={1}>
                    <Fab
                        className={classes.button}
                        size="small"
                        color="secondary"
                        onClick={props.btn}
                    >
                        <Add />
                    </Fab>
                </Grid>

            </Grid>

        </div>
    )
}