
function ListDetail({ entry, handleDeleteEntry }) {

    function handleDelete(e) {
        const listID = e.target.name
        console.log(listID)
        fetch(`http://localhost:5000/${listID}/${entry.id}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json())
            .then(() => handleDeleteEntry(entry))
    }

    function handleCompleted() {
        console.log("completed!")
    }

    return (
        <div>
            <li>{entry.item}
                <button name={entry.listName} onClick={handleDelete}>Delete</button>
                <button onClick={handleCompleted}>Mark as Complete</button>
            </li>
        </div>)
}

export default ListDetail


// "item": "Read through Introduction to Client-Side Routing",
// "priority": "high",
// "completed": "false"

