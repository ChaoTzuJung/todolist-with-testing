import React, { useState } from 'react'
import Input from '../Input'
import Header from '../Header'
import TodoList from '../TodoList'
import "./Todo.css"

function Todo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <Header title="Todo" />
            <Input 
                todos={todos}
                setTodos={setTodos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo
