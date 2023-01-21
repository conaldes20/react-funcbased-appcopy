import React from "react"
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  //render() {
  return (
      <ul>
        {props.todos.map(todo => (
          //<li>{todo.title}</li>
	  //<li key={todo.id}>{todo.title}</li>
	  <TodoItem
  	    key={todo.id}
  	    todo={todo}
  	    handleChangeProps={props.handleChangeProps}
	    deleteTodoProps={props.deleteTodoProps}
	    setUpdate={props.setUpdate}
	  />
        ))}
      </ul>
  )
  //}
}

export default TodosList