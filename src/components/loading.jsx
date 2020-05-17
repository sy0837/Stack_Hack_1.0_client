import React from 'react'

import {
    makeStyles,
    Backdrop,
    CircularProgress
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      }
}))

export default (props) => {
    const classes = useStyles()
    return (
        <div>

            <Backdrop className={classes.backdrop} open={props.value} onClick={props.click}>
                <CircularProgress color="inherit"/>
            </Backdrop>

        </div>
    )
}