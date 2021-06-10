import React from "react";

const TodoItem = (props) => {
    const { todos, completedTodo, deleteTodo} = props;
    return (
        
            <div>
                <ul className="list-group list-group-flush">
                    {
                        todos.map(todo => {
                            return (
                                
                                    
                                    <li  
                                        className="list-group-item d-flex justify-content-between" 
                                        key={todo.Id}>
                                        <div>
                                        <input type="checkbox" checked={todo.isCompleted} onChange={() => completedTodo(todo.Id)}/>
                                        <span className={todo.isCompleted ?`completed`: null}>{todo.text}</span>
                                        </div>
                                        <button onClick={()=> deleteTodo(todo.Id)}>
                                            x
                                        </button>
                                        
                                        
                                    </li>
                                
                            )
                        })
                    }
            </ul>
            </div>
            
        
    )
}

export default TodoItem;