import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodos from './AddTodos';
import TodoItem from './Todoitem';

const Todos = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([
        {
            Id:1,
            text:'Working on todays exercise',
            isCompleted: false
        },
        {
            Id:2,
            text:'coding',
            isCompleted: true
        },
        {
            Id:3,
            text:'Habbbits',
            isCompleted: false
        },
    ])
    const changeTodoText = (e) => {
        // set todo text
        // console.log(e.target.value);
        setTodoText(e.target.value);
        
    }

    const AddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            text: todoText,
            isCompleted: false
        };

        setTodos([ newTodo, ...todos]);
        setTodoText("")
    }

    const completedTodo = Id => {
        let updateTodos = todos.map(todo => {
            if(todo.Id === Id){
                todo.isCompleted = true;
                return todo;
            }
            return todo;
        })
        // console
        setTodos(updateTodos);
    }

    const deleteTodo = Id => {
        let todosAfterDelete = todos.filter(todo => todo.Id !== Id)
        setTodos(todosAfterDelete)
    }
    return (
        <div className='card shadow'>
            <div className="card-header">
                < AddTodos todoText={todoText} changeTodoText={changeTodoText} AddTodo={AddTodo}/>
            </div>
            <div className='card-body'>
                < TodoItem todos={todos} completedTodo={completedTodo}  deleteTodo={deleteTodo}/>
                 
            </div>
        </div>
    )
}


export default Todos;