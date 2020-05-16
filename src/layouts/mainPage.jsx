import React from 'react'
import List from '../components/lists'
import Axios from 'axios'
import Todolist from '../components/todolist'
import PadBox from '../components/todobox'
import Input from '../components/input'

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
            todoInput: ""
        }
    }

    componentDidMount() {
        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists'
        }).then(res => {
            this.setState({
                lists: res.data
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
        let newList = this.state.lists
        newList.push({
            list_name: this.state.listInput,
            _id: 1
        })
        console.log(newList)
        this.setState({
            lists: newList,
            listInput: ""
        })
    }

    todoInputHandler(event) {
        this.setState({
            todoInput: event.target.value
        })
    }

    addToTodo() {
        let newTodo = this.state.todos
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


    render() {
        return (
            <div>
                <PadBox>
                    <Grid item sm={4}>
                        <List items={this.state.lists} />
                        <Hidden smDown>
                            <Input />
                        </Hidden>
                    </Grid>
                    <Grid item sm={8}>
                        <Todolist todos={this.state.todos} />

                        <Input />
                    </Grid>
                </PadBox>

            </div>
        )
    }
}

export default MainPage