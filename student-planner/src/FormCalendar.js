import { useState } from "react"


function FormCalendar({ listType, handleNewCalendarEntry }) {
    const [calendarFormData, setCalendarFormData] = useState({
        "title": "",
        "description": "",
        "start": "",
        "end": ""
    })



    function handleCalendarFormChange(e) {
        setCalendarFormData(currentCalendarFormData => ({ ...currentCalendarFormData, [e.target.name]: e.target.value }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        const entryData = {
            title: calendarFormData.title,
            description: calendarFormData.description,
            start: calendarFormData.start,
            end: null
        };



        fetch(`http://localhost:5000/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryData),
        })
            .then((r) => r.json())
            .then((entryData) => console.log(entryData));
    }

    // handleNewCalendarEntry

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> New Event:
                    <input type="text" name="title" placeholder="Enter your event here..." value={calendarFormData.title} onChange={handleCalendarFormChange} />
                </label>

                <label> Enter Date:
                    <input type="date" name="date" value="yyyy-MM-dd" onChange={handleCalendarFormChange} />
                </label>

                <label> Enter Time:
                    <input type="time" name="time" value="HH:mm:ss.SSS" onChange={handleCalendarFormChange} />
                </label>

                <label> Enter Details:
                    <input type="text" name="description" placeholder="Details..." value={calendarFormData.description} onChange={handleCalendarFormChange} />
                </label>

                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default FormCalendar