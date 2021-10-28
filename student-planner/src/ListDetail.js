import { useState } from "react"


function ListDetail({ entry, handleDeleteEntry }) {

    const [completed, setCompleted] = useState(entry.completed)
    const [completedIdName, setCompletedIdName] = useState(false)

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

    // function completeCrossOut() {
    //     let button = document.getElementsByClassName("toDoListCompletedButton")
    //     if (completed === false) {
    //         button.id = "incomplete"
    //     } else {
    //         button.id = "complete"
    //     }
    // }

        function handleCompleted(e) {
        const listID = e.target.name
        //console.log(listID)
        setCompleted(currentStatus => !currentStatus)
        setCompletedIdName(currentID => !currentID)
        let status = !completed
        //console.log(status)
        // completeCrossOut()
        fetch(`http://localhost:5000/${listID}/${entry.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: status })
        })
            .then(resp => resp.json())
            .then((data) => console.log(data))

    }

    return (
        <div>
            <li id={completedIdName ? "complete" : "incomplete"} className="toDoListEntryItem">{entry.item}
                <button className="toDoListEntryButton" name={entry.listName} onClick={handleCompleted}>{completed ? "Mark as incomplete" : "Mark as Complete"}</button>

                <button className="toDoListEntryButton" name={entry.listName} onClick={handleDelete}>Delete</button>
            </li>
        </div>)
}

export default ListDetail



