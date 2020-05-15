import React from 'react'
import List from '../components/lists'
import Axios from 'axios'
import Todolist from '../components/todolist'

import {
    Container,
    Grid
} from '@material-ui/core'

class MainPage extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            lists: []
        } 
    }

    componentDidMount(){
        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/lists'
        }).then(res=> {
            this.setState({
                lists: res.data
            })
        }).catch(err=>{
            console.log(err)
        })

        Axios({
            method: 'GET',
            url: 'https://candle-shiny-indigo.glitch.me/todo/todos'
        }).then(res=>{
            console.log(res.data)
            this.setState({
                todos: res.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        return (
            <div>
                <Container>
                    <Grid container>

                        <Grid item sm={3}>
                        <List items={this.state.lists} />
                        </Grid> 
                        <Grid item sm={8}>
                        <Todolist todos={this.state.todos}/>
                        </Grid>

                    </Grid>
                    
                    
                </Container>
            </div>
        )
    }
}

export default MainPage