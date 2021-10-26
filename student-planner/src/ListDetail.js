import {useState} from "react"


function ListDetail({ entry, handleDeleteEntry }) {

    const [completed, setCompleted] = useState(entry.completed)

    //console.log(completed)
    //console.log(completed)

    function handleDelete(e) {
        const listID = e.target.name
        console.log(listID)
        fetch(`http://localhost:5000/${listID}/${entry.id}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json())
            .then(() => handleDeleteEntry(entry))
    }

    function handleCompleted(e) {
        const listID = e.target.name
        //console.log(listID)
        setCompleted(currentStatus => !currentStatus)
        let status = !completed
        //console.log(status)
        fetch(`http://localhost:5000/${listID}/${entry.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: status})
        })
            .then(resp => resp.json())
            .then((data) => console.log(data) )
        
    }

    return (
        <div>
            <li>{entry.item}
                <button name={entry.listName} onClick={handleDelete}>Delete</button>
                <button name = {entry.listName} onClick={handleCompleted}>{completed ? "Mark as incomplete" : "Mark as Complete"}</button>
            </li>
        </div>)
}

export default ListDetail


// "item": "Read through Introduction to Client-Side Routing",
// "priority": "high",
// "completed": "false"

