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
    createListAsync,
    updateListInput,
    updateTodoInput,
    deleteTodoAsync,
    deleteListAsync
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
        this.props.updateListInput(event.target.value)
    }

    addToList() {
        this.props.createList(this.props.listInput.trim())
    }

    createTodo() {

        this.props.createTodo(this.props.listIndex, this.props.todoInput.trim())

    }

    todoInputHandler(event) {
        this.props.updateTodoInput(event.target.value)
    }

    render() {
        return (
            <div>
                <Loading
                    value={this.props.isLoading}
                />
                <PadBox>
                    <Grid item xs={12} sm={3}>
                        {/* <Hidden xsDown> */}
                            <List
                                items={this.props.lists}
                                selectedItem={this.props.listIndex}
                                selectedItemHandler={(id) => { this.props.updateListIndex(id) }}
                                btn={(id, name) => { this.props.deleteList(id, name) }}
                            />
                            <Input
                                title="Add Category"
                                value={this.props.listInput}
                                handler={(event) => { this.listInputHandler(event) }}
                                btn={() => { this.addToList() }}
                            />
                        {/* </Hidden> */}


                    </Grid>
                    <Grid item xs={12} sm={9}>
                    
                        <Todolist
                            todos={this.props.todos}
                            listId={this.props.listIndex}
                            btn={(id) => { this.props.deleteTodo(id) }}

                        />

                        <Input
                            title="Add Todo-Item"

                            value={this.props.todoInput}
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
        listIndex: state.main.currentListIndex,
        listInput: state.main.listInput,
        todoInput: state.main.todoInput
    }
}

const mapDispatchToProps = dispatch => {

    return {
        toggleLoading: () => dispatch(toggleLoading()),
        fetchTodos: () => dispatch(fetchTodoAsync()),
        fetchLists: () => dispatch(fetchListAsync()),
        updateListIndex: (id) => dispatch(updateListIndex(id)),
        createTodo: (listId, name) => dispatch(createTodoAsync(listId, name)),
        createList: (listName) => dispatch(createListAsync(listName)),
        updateListInput: (data) => dispatch(updateListInput(data)),
        updateTodoInput: (data) => dispatch(updateTodoInput(data)),
        deleteTodo: (id) => dispatch(deleteTodoAsync(id)),
        deleteList: (id, name) => dispatch(deleteListAsync(id, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)