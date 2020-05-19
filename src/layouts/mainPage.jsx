import React from 'react'
import List from '../components/lists'
import Axios from 'axios'
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

class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            lists: [],
            listInput: "",
            todoInput: "",
            isLoading: false,
            currentListIndex: null
        }
    }

    componentDidMount() {
        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists'
        }).then(res => {
            this.setState({
                lists: res.data,
                currentListIndex: res.data[0]._id
            })
        }).catch(err => {
            console.log(err)
        })

        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
        }).then(res => {
            console.log(res.data)
            this.setState({
                todos: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    listInputHandler(event) {
        this.setState({
            listInput: event.target.value
        })
    }

    addToList() {
        this.props.toggleLoading()
        let newList = this.state.lists
        if (this.state.listInput.trim() === '') {
            this.props.toggleLoading()
            return;
        }
        Axios({
            method: 'POST',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists',
            data: {
                listName: this.state.listInput.trim()
            }
        }).then(res => {
            newList.push(res.data)
            console.log(newList)
            this.setState({
                lists: newList,
                listInput: ""
            })
            this.props.toggleLoading()

        }).catch(err => {
            console.log(err)
            this.props.toggleLoading()
        })

    }

    createTodo() {
        this.props.toggleLoading()
        if (this.state.todoInput.trim() === '') {
            this.props.toggleLoading()
            return
        }

        Axios({
            method: 'POST',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos',
            data: {
                listId: this.state.currentListIndex,
                name: this.state.todoInput.trim()
            }
        }).then(response => {
            return Axios({
                method: 'GET',
                url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
            })
        }).then(res => {
            this.setState({
                todos: res.data,
                todoInput: ''
            })
            this.props.toggleLoading()
        }).catch(err => {
            console.log(err)
            this.props.toggleLoading()
        })

    }

    todoInputHandler(event) {
        this.setState({
            todoInput: event.target.value
        })
    }

    changeSelectedListItem(id) {
        console.log(id)
        this.setState({
            currentListIndex: id
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
                            items={this.state.lists}
                            selectedItem={this.state.currentListIndex}
                            selectedItemHandler={(id) => { this.changeSelectedListItem(id) }}
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
                            todos={this.state.todos}
                            listId={this.state.currentListIndex}
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
        isLoading: state.ui.is_loading
    }
}

const mapDispatchToProps = dispatch => {

    return {
        toggleLoading: () => dispatch(toggleLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)