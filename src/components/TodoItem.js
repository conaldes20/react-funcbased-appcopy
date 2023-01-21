import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  //state = {
  //  editing: false
  //}
  const [editing, setEditing] = useState(false)

  //handleEditing = () => {
  //  this.setState({ editing: true })
    //console.log("edit mode activated")
  //}

  const handleEditing = () => {
    setEditing(true)
  }

  //handleUpdatedDone = event => {
  //   if (event.key === "Enter") {
  //      this.setState({ editing: false })
  //   }
  //}

  const handleUpdatedDone = event => {
     if (event.key === "Enter") {
        setEditing(false)
     }
  }

  //componentWillUnmount() {
  //   console.log("Cleaning up...")
  //}

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  /*
  render() {
    const completedStyle = {
       fontStyle: "italic",
       color: "#595959",
       opacity: 0.4,
       textDecoration: "line-through"
    }
    
    const { completed, id, title } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
       viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
	//<li>
	//    {this.props.todo.title}
	// <input type="checkbox" /> {this.props.todo.title}
	// <input type="checkbox" checked={this.props.todo.completed} />
        //</li>
	<li className={styles.item}>
	  <div onDoubleClick={this.handleEditing} style={viewMode}>
	    <input
  		type="checkbox"
	        className={styles.checkbox}
  		checked={completed}
  		onChange={() => this.props.handleChangeProps(id)}/>
	    <button onClick={() => this.props.deleteTodoProps(id)}>
  	       Delete
	    </button>
	    <span style={completed ? completedStyle : null}>{title}</span>
	  </div>
	  <input 
	    type="text" 
	    style={editMode}
	    className={styles.textInput} 
	    value={title} 
	    onChange={e => {
    	      this.props.setUpdate(e.target.value, id)
  	    }}
	    onKeyDown={this.handleUpdatedDone}
	  />
        </li>
    )
  }
  */

  const completedStyle = {
     fontStyle: "italic",
     color: "#595959",
     opacity: 0.4,
     textDecoration: "line-through"
  }
    
  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
     //<li>
     //    {this.props.todo.title}
     // <input type="checkbox" /> {this.props.todo.title}
     // <input type="checkbox" checked={this.props.todo.completed} />
     //</li>
     <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
	    <input
  		type="checkbox"
	        className={styles.checkbox}
  		checked={completed}
  		onChange={() => props.handleChangeProps(id)}/>
	    <button onClick={() => props.deleteTodoProps(id)}>
  	       Delete
	    </button>
	    <span style={completed ? completedStyle : null}>{title}</span>
	  </div>
	  <input 
	    type="text" 
	    style={editMode}
	    className={styles.textInput} 
	    value={title} 
	    onChange={e => {
    	      props.setUpdate(e.target.value, id)
  	    }}
	    onKeyDown={handleUpdatedDone}
       />
    </li>
  )
}

export default TodoItem