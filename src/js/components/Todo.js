import React, { Component } from 'react'


export default class Todo extends Component {
    
    render() {
        return (
            <div class="todo">
            <p class="todo_title">{title}</p>
            <p class="todo_description">{description}</p>
            <div class="btns">    
                <button onclick= "updateTodo()" class="btn" type="button">✏️</button>
                <button onclick="removeTodo()" class="btn" type="button">✖️</button>
                <button onclick="setTodoAsDone()" class="btn" type="button">✔️</button>
            </div>
        </div>
        )
    }
}
