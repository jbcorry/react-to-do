import React, {Component} from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';



class Home extends Component {
    state = {
        todos: [
            {id: 1, content: 'Register my car'},
            {id: 2, content: 'Go to the gym'}
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos: todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }
    render() {

        return (
            <div>
                <h1 className="center red-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>

        )
    }
}

export default Home;