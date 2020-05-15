import React from 'react'
import List from '../components/lists'
import Axios from 'axios'
import Todolist from '../components/todolist'

import {
    Container,
    Grid,
    Button
} from '@material-ui/core'

class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            lists: [],
            listInput: ""
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


    render() {
        return (
            <div>
                <Container>
                    <Grid container>

                        <Grid item sm={3}>
                            <List items={this.state.lists} />
                            <input type="text" value={this.state.listInput} onChange={(event) => { this.listInputHandler(event) }} />
                            <Button onClick={() => { this.addToList() }}>
                                <h3>+</h3>
                            </Button>
                        </Grid>
                        <Grid item sm={8}>

                            <Todolist todos={this.state.todos} />

                        </Grid>

                    </Grid>


                </Container>
            </div>
        )
    }
}

export default MainPage