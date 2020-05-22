import React from 'react';
import MainPage from './layouts/mainPage'
import Navbar from './components/navbar'
import {connect} from 'react-redux'

import {
  fetchTodoAsync,
  fetchListAsync,
} from './store/actions/main'

class App extends React.Component {


  componentDidMount(){
    this.props.fetchLists()
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <Navbar/>
        <MainPage/>
      </div>
    );
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
      fetchTodos: () => dispatch(fetchTodoAsync()),
      fetchLists: () => dispatch(fetchListAsync()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
