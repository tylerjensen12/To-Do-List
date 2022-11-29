import React, {useState} from "react";

function Form(props) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => setUserInput(e.target.value)
    // function handleChange(event){
    //     setUserInput(event.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(userInput)
        console.log(userInput)
        setUserInput('')
    }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a task</h1>
      <input type="text" value={userInput} onChange={handleChange}/>
      <button>Add task  </button>
    </form>
  );
}

export default Form;
