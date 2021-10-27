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
            end: calendarFormData.end
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

                <label> Enter Start Date and Time:
                    <input type="datetime" name="start" value={calendarFormData.start} onChange={handleCalendarFormChange} />
                </label>

                <label> Enter End Date and Time:
                    <input type="datetime" name="end" value={calendarFormData.end} onChange={handleCalendarFormChange} />
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