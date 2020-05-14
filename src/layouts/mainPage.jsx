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
            todos: []
        } 
    }

    componentDidMount(){
        Axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos'
        }).then(res=>{
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
                        <List items={this.state.todos} />
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