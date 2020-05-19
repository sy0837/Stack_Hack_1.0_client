import React from 'react'
import List from '../components/lists'
import Todolist from '../components/todolist'
import PadBox from '../components/todobox'
import Input from '../components/input'
import Loading from '../components/loading'

import {
    Grid,
    Hidden
} from '@material-ui/core'

import { connect } from 'react-redux'
import {
    toggleLoading
} from '../store/actions/ui'
import {
    fetchTodoAsync,
    fetchListAsync,
    updateListIndex,
    createTodoAsync,
    createListAsync
} from '../store/actions/main'

class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            listInput: "",
            todoInput: "",
        }
    }

    componentDidMount() {
        this.props.fetchLists()
        this.props.fetchTodos()
    }

    listInputHandler(event) {
        this.setState({
            listInput: event.target.value
        })
    }

    addToList() {
        this.props.createList(this.state.listInput.trim())
    }

    createTodo() {

        this.props.createTodo(this.props.listIndex, this.state.todoInput.trim())

    }

    todoInputHandler(event) {
        this.setState({
            todoInput: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Loading
                    value={this.props.isLoading}
                />
                <PadBox>
                    <Grid item sm={4}>
                        <List
                            items={this.props.lists}
                            selectedItem={this.props.listIndex}
                            selectedItemHandler={(id) => { this.props.updateListIndex(id) }}
                        />
                        <Hidden xsDown>
                            <Input
                                title="add list"
                                value={this.state.listInput}
                                handler={(event) => { this.listInputHandler(event) }}
                                btn={() => { this.addToList() }}
                            />
                        </Hidden>
                    </Grid>
                    <Grid item sm={8}>
                        <Todolist
                            todos={this.props.todos}
                            listId={this.props.listIndex}
                        />

                        <Input
                            title="add todo"
                            value={this.state.todoInput}
                            handler={(event) => { this.todoInputHandler(event) }}
                            btn={() => { this.createTodo() }}
                        />
                    </Grid>
                </PadBox>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.ui.is_loading,
        todos: state.main.todos,
        lists: state.main.lists,
        listIndex: state.main.currentListIndex
    }
}

const mapDispatchToProps = dispatch => {

    return {
        toggleLoading: () => dispatch(toggleLoading()),
        fetchTodos: () => dispatch(fetchTodoAsync()),
        fetchLists: () => dispatch(fetchListAsync()),
        updateListIndex: (id) => dispatch(updateListIndex(id)),
        createTodo: (listId, name) => dispatch(createTodoAsync(listId, name)),
        createList: (listName) => dispatch(createListAsync(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)