

function EventDetail ({eventClick, setEventClick, title, id, start, end}) {
    
    console.log(eventClick.event)
    const startDate = start.slice(0,10)
    const startTime = start.slice(11,19)
    //const startDateAndTime = eventClick.event.start
    
    function handleDeleteButtonClick () {
        fetch(`http://localhost:5000/events/${id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json"},   
        })
        .then (() => {
            console.log("deleted")
            eventClick.event.remove();
            setEventClick(null)
        })
    }

    function handleKeepButtonClick () {
        setEventClick(null);
    }

    return(
        <div>
            <h4>Scheduled event: {title}</h4>
            <p>On: {startDate} </p>
            <p>At: {startTime} - (24Hr Clock)</p>
            <button onClick = {handleKeepButtonClick}>keep Event...</button>
            <button onClick = {handleDeleteButtonClick}>Delete Event...</button>
        </div>
    )
}


export default EventDetail