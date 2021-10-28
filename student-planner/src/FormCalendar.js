import { useState } from "react"


function FormCalendar({ listType, handleNewCalendarEntry }) {
    const [calendarFormData, setCalendarFormData] = useState({
        "title": "",
        "start": "",
        "end": ""
    })



    function handleCalendarFormChange(e) {
        setCalendarFormData(currentCalendarFormData => ({ ...currentCalendarFormData, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        let startDateAndTime = calendarFormData.start
        let endDateAndTime = calendarFormData.end
        const startDate = startDateAndTime.slice(0,10)
        const startTime = startDateAndTime.slice(11)
        const endDate = endDateAndTime.slice(0,10)
        const endTime = endDateAndTime.slice(11)
        
        const entryData = {
            title: calendarFormData.title,
            description: calendarFormData.description,
            start: `${startDate}T${startTime}`,
            end: `${endDate}T${endTime}`
        };

        fetch(`http://localhost:5000/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryData),
        })
            .then((r) => r.json())
            .then((entryData) => {
                handleNewCalendarEntry(entryData)
                setCalendarFormData({
                    "title": "",
                    "start": "",
                    "end": ""
                })
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Enter your new Event:
                    <input type="text" name="title" placeholder="Enter your event here..." value={calendarFormData.title} onChange={handleCalendarFormChange} />
                </label>

                {/* <label> Additional information:
                    <input type="text" name="description" placeholder="Details..." value={calendarFormData.description} onChange={handleCalendarFormChange} />
                </label> */}

              

                <label> Start Date and Time:
                    <input type="datetime" name="start" placeholder = "2021-10-25,10:30:00" value={calendarFormData.start} onChange={handleCalendarFormChange} />
                </label>


                <label> End Date and Time:
                    <input type="datetime" name="end" placeholder = "2021-10-25,10:30:00" value={calendarFormData.end} onChange={handleCalendarFormChange} />
                </label>

               
                
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default FormCalendar