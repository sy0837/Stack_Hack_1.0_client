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

class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            lists: [],
            listInput: "",
            todoInput: "",
            isLoading: false,
            currentListIndex: 0
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
        this.backDropOpen()
        let newList = this.state.lists
        if (this.state.listInput.trim() === '') {
            this.setState({
                isLoading: false
            })
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
                listInput: "",
                isLoading: false
            })


        }).catch(err => {
            console.log(err)
            this.setState({
                isLoading: false
            })
        })

    }

    todoInputHandler(event) {
        this.setState({
            todoInput: event.target.value
        })
    }

    addToTodo() {
        let newTodo = this.state.todos
        if (this.state.todoInput.trim() === '') {
            return
        }
        newTodo.push({
            name: this.state.todoInput,
            _id: 1
        })
        console.log(newTodo)
        this.setState({
            todos: newTodo,
            todoInput: ""
        })
    }

    backDropClose() {
        this.setState({
            isLoding: false
        })
    }

    backDropOpen() {
        this.setState({
            isLoading: true
        })
    }

    changeSelectedListItem(event){
        console.log(event)
        this.setState({
            currentListIndex: event.target.selectedItem
        })
    }


    render() {
        return (
            <div>
                <Loading
                    value={this.state.isLoading}
                />
                <PadBox>
                    <Grid item sm={4}>
                        <List 
                        items={this.state.lists}
                        selectedItem = {this.state.currentListIndex}
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
                        <Todolist todos={this.state.todos} />

                        <Input
                            title="add todo"
                            value={this.state.todoInput}
                            handler={(event) => { this.todoInputHandler(event) }}
                            btn={() => { this.addToTodo() }}
                        />
                    </Grid>
                </PadBox>

            </div>
        )
    }
}

export default MainPage