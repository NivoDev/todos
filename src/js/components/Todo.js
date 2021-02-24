import React, { Component } from 'react'



export default class Todo extends Component {
    state={
        title,
        description
    }

    updateState = () => {
        set.state({
            
        })
    }

    render() {
        return (
            
            <div class="todo">
            <p class="todo_title">{this.state.title}</p>
            <p class="todo_description">{this.state.description}</p>
            <div class="btns">    
                <button onclick= "updateTodo()" class="btn" type="button">✏️</button>
                <button onclick="removeTodo()" class="btn" type="button">✖️</button>
                <button onclick="setTodoAsDone()" class="btn" type="button">✔️</button>
            </div>
        </div>
        )
    }
}
