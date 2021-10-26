import {useState} from "react"


function FormToDo() {

    const [formData, setFormData] = useState({
        item: "",
        listName: "",
        priority: "",
        completed: false
    })


    function handleSubmit(e){
        e.preventDefault()
        console.log("submitting...")
    }
    return( 
    <div>
        <form onSubmit = {handleSubmit}>
            <label> New Task:
                <input type = "text" name = "todo" placeholder = "Enter your task here..." />
            </label>
            
            <label> Select priority level:
                <select name = "priority">
                <option name = "high">High</option>
                <option name = "low">Low</option>
                </select>
            </label>
            <button type = "submit"> Submit </button>
           
        </form>
    </div>
    )
}

export default FormToDo