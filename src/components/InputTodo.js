import React, { useState } from "react"

const InputTodo = (props) => {
  //state = {
  //  title: ""
  //};
  const [inputText, setInputText] = useState({ title: "" })

  //onChange = e => {
  //   this.setState({    
  //	[e.target.name]: e.target.value 
  //   });
     //console.log("hello");
  //};

  const onChange = e => {
     setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  };

  /*
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
         title: "",
      })
    } else {
      alert("Please write item")
    }
    //console.log(this.state.title);
  };
  */

  const handleSubmit = e => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
         title: "",
      })
    } else {
      alert("Please write item")
    }
    //console.log(this.state.title);
  };
  
  /*
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
	  className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"          
	  onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
  */

  return (
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
	  className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"          
	  onChange={onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
  )
}
export default InputTodo