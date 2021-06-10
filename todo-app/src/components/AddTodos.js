import React from "react";

const AddTodos = (props) => {
    const { todoText, changeTodoText , AddTodo } = props;
    return(
        <div className="input-group mb-3">
                    <input 
                        type="text"
                        className="form-control" 
                        placeholder="Enter a todo"
                        value={todoText}
                        onChange={(e)=> {changeTodoText(e)}}
                    />
                    <button onClick={AddTodo} className="btn btn-primary">
                        Add
                    </button>
        </div>
    )
}

export default AddTodos;