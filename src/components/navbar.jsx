import React from 'react'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Container
} from '@material-ui/core'

import List from './lists'
import Input from './input'

import { Menu } from '@material-ui/icons'

import {connect} from 'react-redux'

import {
    fetchListAsync,
    updateListIndex,
    deleteListAsync,
    updateListInput,
    createListAsync
} from '../store/actions/main'

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


const Navbar = (props) => {
    const classes = useStyle()

    function listInputHandler(event) {
        props.updateListInput(event.target.value)
    }

    function addToList() {
        props.createList(props.listInput.trim())
    }

    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="#000">
                        TODO
                    </Typography>
                </Toolbar>

            </AppBar>

            <Drawer
            anchor="left"
            open={false}
            >

            <Container>
            <List
            items={props.lists}
            selectedItem={props.listIndex}
            selectedItemHandler={(id) => { props.updateListIndex(id) }}
            btn={(id, name) => {props.deleteList(id, name) }}
            />

            <Input
            title="Add Category"
            value={props.listInput}
            handler={(event) => { listInputHandler(event) }}
            btn={() => { addToList() }}
            />
            </Container>

            </Drawer>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        lists: state.main.lists,
        listIndex: state.main.currentListIndex,
        listInput: state.main.listInput,
        isLoading: state.ui.is_loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchListAsync()),
        updateListIndex: (id) => dispatch(updateListIndex(id)),
        deleteList: (id, name) => dispatch(deleteListAsync(id, name)),
        updateListInput: (data) => dispatch(updateListInput(data)),
        createList: (listName) => dispatch(createListAsync(listName)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)