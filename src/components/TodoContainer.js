import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
//import { Route, Switch } from "react-router-dom"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())
  
  function getInitialTodos() {
     const temp = localStorage.getItem("todos")
     if (temp) {
	const loadedTodos = JSON.parse(temp)
        //if (loadedTodos) {
	//   setTodos([todos, loadedTodos])
        //}
	console.log("Local Data Available!");
	//const savedTodos = JSON.parse(todos)
        return loadedTodos || []
     } else {
        //fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        //  .then(response => response.json())
        //  .then(data => setTodos([todos, data]));

        //const temp = JSON.stringify(todos)
    	//localStorage.setItem("todos", temp)
	//console.log("Remote Data Available!");
	//const loadedTodos = JSON.parse(temp)
        //return loadedTodos || []

	fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then(response => response.json())
          .then(data => {
	     const temp = JSON.stringify(data);
    	     localStorage.setItem("todos", temp);
	     console.log("Remote Data Available!");
	     const loadedTodos = JSON.parse(temp)
             return loadedTodos || []
	  })	
     }
  }

  /*
  useEffect(() => {
     //if(prevState.todos !== this.state.todos) {
     getInitialTodos();
     //const temp = JSON.stringify(todos)
     //localStorage.setItem("todos", temp)
     //}
  }, [todos]); // notice, array as second argument
  */

  useEffect(() => {
     //if(prevState.todos !== this.state.todos) {
     //getInitialTodos();
     const temp = JSON.stringify(todos)
     localStorage.setItem("todos", temp)
     //}
  }, [todos]) // notice, no second argument

  const handleChange = id => {  
    /*  
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo, completed: !todo.completed,
            }
          }
          return todo
        }),
      }
    })
    */

    setTodos(prevState => prevState.map(todo => {
       if (todo.id === id) {
          return {
             ...todo, completed: !todo.completed,
          }
       }
       return todo
    }))
  };

  /*
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
  */

  /*
  addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };  
    this.setState({    
      todos: [...this.state.todos, newTodo]  
    });
    //console.log(title);
  };
  */

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };  
    setTodos([...todos, newTodo])  
  };

  /*
  delTodo = id => {
     //console.log("deleted", id);
     this.setState({    
	todos: [      
	  ...this.state.todos.filter(todo => {        
	    return todo.id !== id;      
	  })    
        ]  
     });
  };
  */

  const delTodo = id => {
     setTodos([      
        ...todos.filter(todo => {        
	   return todo.id !== id;      
        }),    
     ])
  };

  //setUpdate = (updatedTitle, id) => {
  //   console.log(updatedTitle, id)
  //}

  /*
  setUpdate = (updatedTitle, id) => {
     this.setState({
        todos: this.state.todos.map(todo => {
           if (todo.id === id) {
              todo.title = updatedTitle
      	   }
      	   return todo
        }),
     })
  }
  */

  const setUpdate = (updatedTitle, id) => {
     setTodos(
        todos.map(todo => {
           if (todo.id === id) {
              todo.title = updatedTitle
      	   }
      	   return todo
        })
     );
  };

  return (    
      <div className="container">
         <div className="inner">
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
	        setUpdate={setUpdate}
              />
         </div>
      </div>
  );
}
export default TodoContainer